import React, { useState, useEffect } from 'react'
import { Button, ListGroup } from "react-bootstrap";
import fire from "../../config/firebase";

const InExam = () => {
    const [dataSoal, setDataSoal] = useState([]);
    const [soalTerpilih, setSoalTerpilih] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const [chooseAnswer, setChooseAnswer] = useState(undefined)

    // dibuat aja nilai defaultnya array kosong 
    const [dataLocalStorage , setLocalStorage] = useState([])
    
    useEffect(() => {
        let temp = []
        fire.firestore().collection("tryout").doc("8rMpLO1vfy3IzzulsQcq").collection("penalaran_umum").get()
            .then(response => {
                response.forEach(doc => temp.push(doc.data()))
                temp.sort(compare)
                setDataSoal(temp)
                setLoading(false)
            })
            .catch(err => console.error(err))

        if (localStorage.key("dataJawaban")) {
            // jika di localStorage ada key dataJawaban , get data nya , yg nantinya berbentuk array
            setLocalStorage(JSON.parse(localStorage.getItem("dataJawaban")))
        }

    }, [])

    // fungsi untuk sort array dataSoal
    const compare = (a, b) => {
        if (a.nomor_soal < b.nomor_soal) {
            return -1;
        }
        if (a.nomor_soal > b.nomor_soal) {
            return 1;
        }
        return 0;
    }

    const choosingAnswer = (answerLetter) => {
        let obj = {
            beban: 0,
            jawaban: answerLetter,
            nomor_soal: soalTerpilih + 1
        }
        setChooseAnswer(answerLetter)
        console.log(obj)

        // clone array dataLocalStorage
        let array = [...dataLocalStorage];
        
        array.push(obj)
        setLocalStorage(array)
        
        // dimasukkan ke localStorage
        localStorage.setItem("dataJawaban" , JSON.stringify(array))
    }

    return (
        <div className="parent-area d-flex container" style={{ position: "absolute", top: "60px", right: "0", bottom: "0", left: "0" }}>
            {
                loading ? (
                    <span>Loading soal ...</span>
                ) : (
                    <>
                        <div className="soal w-75 p-4 border-right">
                            <Button variant="primary" disabled={true}>Soal Nomor {dataSoal[soalTerpilih].nomor_soal}</Button>
                            <p className="py-3 w-75">{dataSoal[soalTerpilih].text_soal}</p>

                            <div className="pilgan">
                                <ListGroup>
                                    <ListGroupItem chooseAnswer={chooseAnswer === "A" ? true : false} abjad="A" jawaban={dataSoal[soalTerpilih].a} onClick={() => choosingAnswer("A")} />
                                    <ListGroupItem chooseAnswer={chooseAnswer === "B" ? true : false} abjad="B" jawaban={dataSoal[soalTerpilih].b} onClick={() => choosingAnswer("B")} />
                                    <ListGroupItem chooseAnswer={chooseAnswer === "C" ? true : false} abjad="C" jawaban={dataSoal[soalTerpilih].c} onClick={() => choosingAnswer("C")} />
                                    <ListGroupItem chooseAnswer={chooseAnswer === "D" ? true : false} abjad="D" jawaban={dataSoal[soalTerpilih].d} onClick={() => choosingAnswer("D")} />
                                    <ListGroupItem chooseAnswer={chooseAnswer === "E" ? true : false} abjad="E" jawaban={dataSoal[soalTerpilih].e} onClick={() => choosingAnswer("E")} />
                                </ListGroup>
                            </div>

                            <div className="mt-3">
                                <Button variant="outline-secondary" disabled={soalTerpilih === 0 ? true : false} onClick={() => setSoalTerpilih(soalTerpilih - 1)}>Sebelumnya</Button>
                                <Button variant="outline-secondary" disabled={soalTerpilih === dataSoal.length - 1 ? true : false} className="mx-3" onClick={() => setSoalTerpilih(soalTerpilih + 1)}>Selanjutnya</Button>
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
                                            <td className="text-center" onClick={() => setSoalTerpilih(0)} style={{ cursor: "pointer" }}><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px", backgroundColor: soalTerpilih === 0 ? "#FFB332" : "" }} >1</div></td>
                                            <td className="text-center" onClick={() => setSoalTerpilih(1)} style={{ cursor: "pointer" }}><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px", backgroundColor: soalTerpilih === 1 ? "#FFB332" : "" }} >2</div></td>
                                            <td className="text-center" onClick={() => setSoalTerpilih(2)} style={{ cursor: "pointer" }}><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px", backgroundColor: soalTerpilih === 2 ? "#FFB332" : "" }} >3</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >4</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >5</div></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >6</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >7</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >8</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >9</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >10</div></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >11</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >12</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >13</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >14</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >15</div></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >16</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >17</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >18</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >19</div></td>
                                            <td className="text-center"><div className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "25px", height: "25px", padding: "15px" }} >20</div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
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

export default InExam
