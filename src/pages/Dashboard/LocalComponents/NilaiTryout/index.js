import React , {useEffect, useState} from 'react';
import {Breadcrumb, Button} from "react-bootstrap"
import { SpinnerLoader } from '../../../../components';
import DetailNilai from './DetailNilai';
import fire from "../../../../config/firebase";
import "../style.css";
import style from "./nilaiTryout.module.css";


const fetchSubmission = async( userId ) => {

    const response = fire.firestore().collection("submisi").where("user_id", "==", userId );
    const submissionData = await response.get();


    let tempSubmissionArray = [];

    submissionData.docs.forEach((submission)=>{

        tempSubmissionArray.push(submission.data());
    });

    tempSubmissionArray.forEach((submission)=>{
        let tryOutDetail = Promise.all([fetchTryOutDetail(submission.tryout_id)]);
        tryOutDetail.then((result)=>{
            submission.jenis_tryout = result[0].jenis_tryout
            submission.waktu_mulai = result[0].waktu_mulai
            submission.waktu_akhir = result[0].waktu_akhir
        }).catch((err)=>{
            console.log(err);
        });
    });


    return tempSubmissionArray;
}

const fetchTryOutDetail = async( tryOutId ) => {
    const response = fire.firestore().collection("tryout").doc(tryOutId);
    const tryOutDetailData = await response.get();

    let monthOption = { month: 'long' };

    let startDateRawFormat = new Date(tryOutDetailData.data().waktu_mulai.seconds);
    let startDateStringFormat = startDateRawFormat.getDay() + " " + startDateRawFormat.toLocaleDateString("id-ID", monthOption) + " " + startDateRawFormat.getFullYear();
    
    let endDateRawFormat = new Date(tryOutDetailData.data().waktu_akhir.seconds);
    let endDateStringFormat = endDateRawFormat.getDay() + " " + endDateRawFormat.toLocaleDateString("id-ID", monthOption) + " " + endDateRawFormat.getFullYear();

    const tryOutDetails = {
        "jenis_tryout": tryOutDetailData.data().jenis_tryout,
        "waktu_mulai": startDateStringFormat,
        "waktu_akhir": endDateStringFormat,
    }

    return tryOutDetails;
}


const NilaiTryout = ({size, dataUser}) => {
    // handle komponen detail nilai
    const [submissionData , setSubmissionData] = useState();
    const [detailNilai , setDetailNilai] = useState(false);
    const [selectedDetail , setSelected] = useState(undefined);
    const [loading , setLoading] = useState(true);

    useEffect( () => {
        let fetchedSubmissions = Promise.all([fetchSubmission("AMX1JrbtPbM4zY4FPpPtQpptMEt2")]);
        fetchedSubmissions.then((result)=>{
            console.log(result);
            setSubmissionData(result);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        });

    } , [dataUser])

    return (
        <div>
            {
                detailNilai === false ? (
                    loading ? (
                        <div className="w-100 d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                            <SpinnerLoader text="Loading Nilai TryOut" />
                        </div>
                    ) : (
                        <ItemTable
                            items= { submissionData[0] } 
                            // items={[
                            //     { id: 1, tryout: 'Tryout Saintek 1', waktu_mulai: '17 Maret 2021' , waktu_akhir: '20 Maret 2021' , jenis_tryout: 'Reguler' , rata_rata: 500 },
                            //     { id: 2, tryout: 'Tryout Saintek 2', waktu_mulai: '19 Juni 2021' , waktu_akhir: '24 Juni 2021' , jenis_tryout: 'Partner' , rata_rata: 600 },
                            //     { id: 3, tryout: 'Tryout Saintek 3', waktu_mulai: '22 Agustus 2021' , waktu_akhir: '25 Agustus 2021' , jenis_tryout: 'Reguler' , rata_rata: 300 },
                            // ]} 
                            handleDetail={(value , selectedDetail) => {setDetailNilai(value); setSelected(selectedDetail)}}
                            size={size}
                        />
                    )
                ) : (
                    <DetailNilai handleBack={(value) => setDetailNilai(value)} selectedDetail={selectedDetail} size={size} />
                )
            }
        </div>    
    )
}

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ItemTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.items);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <>
            <Breadcrumb style={{ marginTop: '1rem' }} className={style.breadcrumb} >
                <Breadcrumb.Item href="#">NILAI TRYOUT</Breadcrumb.Item>
            </Breadcrumb>

            <h1 style={{ fontSize: '32px' , margin: '-10px 0 20px 0'}}>Nilai Try Out</h1>

            <div className="bg-white p-3">
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.th}>
                                <span className={style.th_span}>No</span>
                            </th>
                            <th className={style.th}>
                                <span className={style.th_span}>Nama TryOut</span>
                            </th>
                            <th className={style.th}>
                                <span className={style.th_span}> Tanggal Mulai TryOut </span>
                            </th>
                            <th className={style.th}>
                                <span className={style.th_span}> Tanggal Berakhir TryOut </span>
                            </th>
                            <th className={style.th}>
                                <span className={style.th_span}> Jenis TryOut </span>
                            </th>
                            <th className={style.th}>
                                <button 
                                    type="button" 
                                    className={`${getClassNamesFor('rata_rata') === "ascending" ? "ascending" : getClassNamesFor('rata_rata') === "descending" ? "descending" : "default"} ${style.thead_button}`}
                                    onClick={() => requestSort('rata_rata')}
                                >
                                    Rata-Rata
                                </button>
                            </th>
                            <th className={style.th}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item , index) => ( 
                            <tr className={style.tr} key={index}>
                                <td className={style.td}>{index+1}</td>
                                <td className={style.td}>{item.nama_tryout}</td>
                                <td className={style.td}>{item.waktu_mulai}</td>
                                <td className={style.td}>{item.waktu_akhir}</td>
                                <td className={style.td}>{item.jenis_tryout}</td>
                                <td className={style.td}>{item.rata_rata}</td>
                                <td className={style.td}>
                                    <Button variant="outline-secondary" className="p-1" onClick={() => props.handleDetail(true , index)} >Lihat Detail</Button>{' '}
                                </td>
                            </tr>
                            // <tr key={item.tryout_id}>
                            //     <td>{item.nama_tryout}</td>
                            //     <td>{item.nilai_tka}</td>
                            //     <td>{item.nilai_tps}</td>
                            //     <td>{item.total_nilai}</td>
                            // </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default NilaiTryout
