import React, { useState, useEffect } from 'react'
import { Button, ListGroup, Image, Modal } from "react-bootstrap";
import fire from "../../config/firebase";

const InExam = () => {
    // logic di komponent ini : 
    // - semua jawaban di simpan di localStorage dulu , terus di akhir soal ada tombol kirim jawaban , nah jawaban dari localStorage itu di looping 1 1 , di post ke firebase
    //   kalo di simpan dulu di localStorage , kalau ada case user mengganti jawabannya , logic & responnya bisa lebih cepat

    // - setiap user habis memilih jawaban , akan langsung dikirim ke firebase jawabannya , tapi itu agak susah kalo usernya mau ganti jawaban

    // dataUser ini datanya diambil dari localStorage buat dipakai uid nya, untuk data field collection jawaban , 
    // karena disana cuman ada tryout_id aja
    const [dataUser , setDataUser] = useState({})

    const [dataSoal, setDataSoal] = useState([]);
    const [soalTerpilih, setSoalTerpilih] = useState(0);
    const [loading, setLoading] = useState(true);

    const [dataLocalStorage , setLocalStorage] = useState([])

    const [showModal , setShowModal] = useState(false)
    
    useEffect(() => {
        if (localStorage.key("dataUser")) {
            setDataUser(JSON.parse(localStorage.getItem("dataUser")))
        }
        fire.firestore().collection("tryout").doc("8rMpLO1vfy3IzzulsQcq").collection("penalaran_umum").get()
            .then(response => {
                let temp = []
                let obj;
                response.forEach(doc => {
                    obj = {
                        ...doc.data(),
                        isAnswered: false,
                        jawaban: "",
                        beban: 0,
                    }
                    temp.push(obj)
                })
                temp.sort(compare)
                setDataSoal(temp)
            })
            .catch(err => console.error(err))
            setLoading(false)
    }, [])

    // fungsi untuk sort array 
    const compare = (a, b) => {
        if (a.nomor_soal < b.nomor_soal) {
            return -1;
        }
        if (a.nomor_soal > b.nomor_soal) {
            return 1;
        }
        return 0;
    }

    // fungsi untuk mengisi jawaban baru / mengganti jawaban
    const choosingAnswer = (answerLetter) => {
        let array = [...dataSoal]
        
        // jika user mengganti jawaban yang sudah pernah dipilih 
        if ( dataSoal[soalTerpilih].jawaban !== "" ) {
            dataSoal[soalTerpilih] = {
                ...dataSoal[soalTerpilih],
                jawaban: answerLetter
            }
            // hanya ganti data jawaban soal terpilih yang ada di localStorage
            array[soalTerpilih].jawaban = answerLetter
        } else {
            dataSoal[soalTerpilih] = {
                ...dataSoal[soalTerpilih],
                isAnswered: true,
                jawaban: answerLetter
            }
            // jika user baru saja memilih jawaban , objek dataSoal soal terpilih push ke array
            array.push(dataSoal[soalTerpilih])
        }
        setLocalStorage(array)

        localStorage.setItem("jawaban" , JSON.stringify(array.sort(compare)))
    }

    return (
        <div className="parent-area d-flex container" style={{ position: "absolute", top: "60px", right: "0", bottom: "0", left: "0" }}>
            {
                loading ? (
                    <span>Loading soal ...</span>
                ) : (
                    Object.keys(dataSoal).length !== 0 ? (
                        <>
                            <div className="soal w-75 p-4 border-right">
                                <Button variant="primary" disabled={true}>Soal Nomor {dataSoal[soalTerpilih].nomor_soal}</Button>
                                <br />
                                {
                                    dataSoal[soalTerpilih].hasOwnProperty("gambar_soal") ? (
                                        <>
                                            <Image src={dataSoal[soalTerpilih].gambar_soal} className="w-50 my-3" style={{cursor: "pointer"}} fluid onClick={() => setShowModal(true)} />
                                            <MyVerticallyCenteredModal image={dataSoal[soalTerpilih].gambar_soal} show={showModal} onHide={() => setShowModal(false)} />
                                        </>
                                        ) : (<span></span>)
                                }


                                <p className="py-3 w-75">{dataSoal[soalTerpilih].text_soal}</p>

                                <div className="pilgan">
                                    <ListGroup>
                                        <ListGroupItem chooseAnswer={dataSoal[soalTerpilih].jawaban === "A" ? true : false} abjad="A" jawaban={dataSoal[soalTerpilih].a} onClick={() => choosingAnswer("A")} />
                                        <ListGroupItem chooseAnswer={dataSoal[soalTerpilih].jawaban === "B" ? true : false} abjad="B" jawaban={dataSoal[soalTerpilih].b} onClick={() => choosingAnswer("B")} />
                                        <ListGroupItem chooseAnswer={dataSoal[soalTerpilih].jawaban === "C" ? true : false} abjad="C" jawaban={dataSoal[soalTerpilih].c} onClick={() => choosingAnswer("C")} />
                                        <ListGroupItem chooseAnswer={dataSoal[soalTerpilih].jawaban === "D" ? true : false} abjad="D" jawaban={dataSoal[soalTerpilih].d} onClick={() => choosingAnswer("D")} />
                                        <ListGroupItem chooseAnswer={dataSoal[soalTerpilih].jawaban === "E" ? true : false} abjad="E" jawaban={dataSoal[soalTerpilih].e} onClick={() => choosingAnswer("E")} />
                                    </ListGroup>
                                </div>

                                <div className="my-3 pb-4">
                                    <Button variant="outline-secondary" disabled={soalTerpilih === 0 ? true : false} onClick={() => setSoalTerpilih(soalTerpilih - 1)}>Sebelumnya</Button>
                                    <Button variant="outline-secondary" disabled={soalTerpilih === dataSoal.length - 1 ? true : false} className="mx-3" onClick={() => setSoalTerpilih(soalTerpilih + 1)}>Selanjutnya</Button>
                                    <Button variant="success" className={`mx-3 ${soalTerpilih === dataSoal.length - 1 ? "" : "d-none"}`}>Selesai dan Kirim</Button>
                                </div>

                            </div>

                            <div className="nomor-soal w-25 py-4 px-4 border-left">
                                <ListGroup.Item className="d-flex justify-content-between border">
                                    <span>Sisa Waktu</span>
                                    <span>30:00</span>
                                </ListGroup.Item>

                                <div className="nomor mt-2">
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="text-center" onClick={() => setSoalTerpilih(0)} style={{cursor: "pointer" }}><div className={`border ${dataSoal[0].isAnswered === true ? "border-primary" : "border-secondary"} rounded-circle d-flex align-items-center justify-content-center`} style={{ width: "25px", height: "25px", padding: "15px", backgroundColor: soalTerpilih === 0 ? "#FFB332" : ""}} >1</div></td>
                                                <td className="text-center" onClick={() => setSoalTerpilih(1)} style={{cursor: "pointer" }}><div className={`border ${dataSoal[1].isAnswered === true ? "border-primary" : "border-secondary"} rounded-circle d-flex align-items-center justify-content-center`} style={{ width: "25px", height: "25px", padding: "15px", backgroundColor: soalTerpilih === 1 ? "#FFB332" : ""}} >2</div></td>
                                                <td className="text-center" onClick={() => setSoalTerpilih(2)} style={{cursor: "pointer" }}><div className={`border ${dataSoal[2].isAnswered === true ? "border-primary" : "border-secondary"} rounded-circle d-flex align-items-center justify-content-center`} style={{ width: "25px", height: "25px", padding: "15px", backgroundColor: soalTerpilih === 2 ? "#FFB332" : ""}} >3</div></td>
                                                
                                                <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >4</div></td>
                                                <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >5</div></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : (<span>Loading ... </span>)
                )
            }
        </div>
    )
}

const ListGroupItem = ({ chooseAnswer, abjad, jawaban, ...rest }) => {
    // props : 
    // - chooseAnswer : untuk handle style jawaban yang dipilih => true / false
    // - abjad : untuk melempar value huruf tiap component
    // - jawaban : untuk melempar value isi jawaban dari data firebase 
    
    return (
        <>
            <ListGroup.Item
                className={`
                    my-2 border w-50 rounded d-flex align-items-center ${chooseAnswer ? "border-primary" : ""}
                `}
                {...rest}
                style={{ cursor: "pointer" }}
            >
                <div className={`d-flex align-items-center justify-content-center ${chooseAnswer ? "border rounded-circle text-white" : ""}`} style={{ width: "23px", height: "23px", backgroundColor: chooseAnswer === true ? "blue" : "" }}>{abjad}</div>
                <div className="mx-3">{jawaban}</div>
            </ListGroup.Item>
        </>
    )
}

// komponen modal gambar
const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Image src={props.image} fluid />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const NomorSoal = () => {

}

export default InExam
