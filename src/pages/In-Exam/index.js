import React, { useState, useEffect, useContext } from 'react'
import { Button, ListGroup, Image, Modal } from "react-bootstrap";
import fire from "../../config/firebase";
import { titleContext } from '../../config/Routes';
import Countdown from 'react-countdown';
import Swal from 'sweetalert2';

const InExam = () => {
    const [dataUser , setDataUser] = useState({})

    const [dataSoal, setDataSoal] = useState([]);
    const [soalTerpilih, setSoalTerpilih] = useState(0);
    const [loading, setLoading] = useState(true);

    const [showModal , setShowModal] = useState(false)
    const [dateNow , setDateNow] = useState(undefined)
    const bidangTryout = {
        saintek: [
            {nama: "penalaran_umum" , waktu: 35},
            {nama: "kuantitatif" , waktu: 35},
            {nama: "pengetahuan_dan_pemahaman_umum" , waktu: 25},
            {nama: "pengetahuan_bacaan_menulis" , waktu: 25},
            {nama: "matematika" , waktu: 22.5},
            {nama: "fisika" , waktu: 22.5},
            {nama: "kimia" , waktu: 22.5},
            {nama: "biologi" , waktu: 22.5},
        ] , 
        soshum: [
            {nama: "penalaran_umum" , waktu: 35},
            {nama: "kuantitatif" , waktu: 35},
            {nama: "pengetahuan_dan_pemahaman_umum" , waktu: 25},
            {nama: "pengetahuan_bacaan_menulis" , waktu: 25},
            {nama: "geografi" , waktu: 22.5},
            {nama: "sejarah" , waktu: 22.5},
            {nama: "sosiologi" , waktu: 22.5},
            {nama: "ekonomi" , waktu: 22.5},
        ]
    }
    const [bidangTerpilih , setBidangTerpilih] = useState(0)
    const namaBidang = useContext(titleContext) // namaBidang.state , namaBidang.dispatch
    
    useEffect(() => {
        if (localStorage.key("dataUser")) {
            setDataUser(JSON.parse(localStorage.getItem("dataUser")))
        }
        fire.firestore().collection("tryout").doc("8rMpLO1vfy3IzzulsQcq").collection(bidangTryout.saintek[bidangTerpilih].nama).get()
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

        setNamaBidang(bidangTryout.saintek[bidangTerpilih].nama)
        setDateNow(Date.now())
    }, [loading])

    const setNamaBidang = (value) => {
        let arr = value.split("")
        let temp = ""
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "_") {
                arr[i] = " "
            }
            temp += arr[i]
        }
        
        // pake context api buat update nama bidang di navbar
        namaBidang.dispatch(kapital(temp))
    }

    // fungsi buat ngatur judul bidang u/ di pake di navbarnya
    const kapital = (str) => {
        return str.replace (/\w\S*/g, function(txt) {  
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); 
        })
    }

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
        
        if ( dataSoal[soalTerpilih].jawaban !== "" ) {
            dataSoal[soalTerpilih] = {
                ...dataSoal[soalTerpilih],
                jawaban: answerLetter
            }
            array[soalTerpilih].jawaban = answerLetter
        } else {
            dataSoal[soalTerpilih] = {
                ...dataSoal[soalTerpilih],
                isAnswered: true,
                jawaban: answerLetter
            }
            array[soalTerpilih] = dataSoal[soalTerpilih]
        }
        localStorage.setItem("jawaban" , JSON.stringify(array.sort(compare)))
    }

    const kirimJawaban = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Waktu mengerjakan subbidang ini telah selesai',
            text: 'Silahkan mengerjakan subbidang selanjutnya',
        }).then(respon => {
            if (respon.isConfirmed){
                let jawaban
                let uploadTask
                if (localStorage.getItem("jawaban") !== null) {
                    jawaban = JSON.parse(localStorage.getItem("jawaban"))
                    let number;
                    for (let jwb of jawaban) {
                        number = jwb.nomor_soal
                        if (jwb.isAnswered) {
                            fire.firestore().collection("jawaban").doc(dataUser.uid).collection(bidangTryout.saintek[bidangTerpilih].nama).add({
                                beban: jwb.beban ,
                                jawaban: jwb.jawaban, 
                                nomor_soal: jwb.nomor_soal,
                            })
                            .then(res => console.log(res))
                            .catch(err => console.error(err))
                        } else if (number) {
                        } else {

                        }
                    }
                } else {
                    jawaban = "tidak ada soal yang dijawab"
                    fire.firestore().collection("jawaban").doc(dataUser.uid).collection(bidangTryout.saintek[bidangTerpilih].nama).add({
                        message: jawaban
                    }).then().catch()
                }
                localStorage.removeItem("jawaban");
                setBidangTerpilih(bidangTerpilih + 1)
                setSoalTerpilih(0)
                setLoading(true)
            }
        })
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
                                </div>

                            </div>

                            {/* bagian nomor soal , kode nya masih belum clean */}
                            <div className="nomor-soal py-4 px-4" style={{width: "310px" , height: "100vh"}}>
                                <ListGroup.Item className="d-flex justify-content-between border px-2">
                                    <span className="m-0">Sisa Waktu</span>
                                    {/* <Countdown date={dateNow + bidangTryout.saintek[bidangTerpilih].waktu * 60000} onComplete={() => kirimJawaban()} /> */}
                                    {/* <Countdown date={dateNow + 5000} onComplete={() => kirimJawaban()} /> */}
                                </ListGroup.Item>

                                <div className="nomor mt-2">
                                    <ul style={{
                                        padding: "0",
                                        margin: "0",
                                        listStyle: "none",
                                        display: "flex",
                                        flexWrap: "wrap",
                                    }}>
                                        {
                                            dataSoal.map((data,index) => {
                                                return (
                                                    <li className="text-center" onClick={() => setSoalTerpilih(index)} style={{width: "35px" , height: "35px" , margin: "5px" , cursor: "pointer"}}>
                                                        <div 
                                                            className={`border ${dataSoal[index].isAnswered === true ? "border-primary" : "border-secondary"} rounded-circle d-flex align-items-center justify-content-center fw-bold`} 
                                                            style={{ width: "100%", height: "100%", padding: "5px", backgroundColor: soalTerpilih === index ? "#FFB332" : "" , color: dataSoal[index].isAnswered ? "blue" : ""}}    
                                                        >
                                                            {data.nomor_soal}
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
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
    console.log(chooseAnswer)
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

export default InExam
