import React from 'react';

const ProgramDetail = () => {
    const programsData = [
        { id: 1, programType: "tryout", programTitle: "TO 1", programDate: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", programStartTime: "", programEndTime: "", paid: true},
        { id: 2, programType: "tryout", programTitle: "TO 2", programDate: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", programStartTime: "", programEndTime: "", paid: true},
        { id: 3, programType: "webinar", programTitle: "Webinar 2", programDate: "Kamis, 24 Juli 2021", programStartTime: "14:00", programEndTime: "16:00", paid: false},
    ]

    return (
        <>
            {/* <Card className="border-0 px-0">
                <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col">
                            <h5><strong>Program Brilliantz Lainnya</strong></h5>
                        </div>
                        <div className="col d-flex flex-row-reverse">
                            <a className="text-decoration-none" href="#" style={{color: '#4A47D6'}}>
                                Lihat Semua
                            </a>
                        </div>
                    </div>
                </Card.Header>
                <hr className="mt-0"/>
                <Card.Body>
                    <ProgramCard programs={programsData}></ProgramCard>
                </Card.Body>
            </Card> */}
            <h1>Program Detail</h1>
        </>
    )
}

export default ProgramDetail