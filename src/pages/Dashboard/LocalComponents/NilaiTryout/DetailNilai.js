import React from 'react'
import { Breadcrumb, Button, Card } from "react-bootstrap";
import { LeftArrow } from "../../../../components";
import style from "./nilaiTryout.module.css";

const DetailNilai = (props) => {
    console.log(props.selectedDetail)
    return (
        <>
            <Breadcrumb style={{ marginTop: '1rem' }} className={style.breadcrumb}>
                <Breadcrumb.Item >NILAI TRYOUT</Breadcrumb.Item>
                <Breadcrumb.Item href="#">DETAIL NILAI TRYOUT</Breadcrumb.Item>
            </Breadcrumb>

            <div className="d-flex align-items-center mb-3">
                <Button variant="light" className="rounded" onClick={() => props.handleBack(false)}><LeftArrow /></Button>
                <h1 style={{ fontSize: '32px', marginLeft: '20px' }}>Rekap Nilai TryOut Saintek 1</h1>
            </div>

            <div className={`${props.size.width < 920 ? '' : 'd-flex'} mt-3 p-4 rounded flex-column`} style={{ width: `${props.size.width < 950 ? '100%' : '688px'}`, backgroundColor: '#fff' }} >
                <Card className="my-2" style={{ backgroundColor: '#4A47D6', borderRadius: '8px' }}>
                    <Card.Body className="text-light" style={{ fontWeight: 'bold' }}>Nilai Rata rata</Card.Body>
                </Card>
                <Card className="my-2" style={{ borderRadius: '8px' }}>
                    <Card.Header style={{ backgroundColor: '#DADCE0', fontWeight: 'bold' }}>Tes Potensi Skolastik</Card.Header>
                    <Card.Body>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Penalaran Umum</span>
                            <span>656</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Pemahaman Baca Menulis</span>
                            <span>656</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Pengetahuan dan Pemahaman Umum</span>
                            <span>656</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Kuantitatif</span>
                            <span>656</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="my-2" style={{ borderRadius: '8px' }}>
                    <Card.Header style={{ backgroundColor: '#DADCE0', fontWeight: 'bold' }}>Tes Kompetensi Akademik</Card.Header>
                    <Card.Body>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Biologi</span>
                            <span>656</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Fisika</span>
                            <span>656</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Matematika</span>
                            <span>656</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                            <span>Kimia</span>
                            <span>656</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default DetailNilai
