import React , {useState, useEffect} from 'react';
import {Breadcrumb, Button} from "react-bootstrap"
import fire from "../../../../config/firebase"
import { SpinnerLoader } from '../../../../components';
import DetailNilai from './DetailNilai';
import "./nilaiTryout.css"

const NilaiTryout = ({size}) => {
    // get nilai dari collection submisi
    const [nilai , setNilai] = useState([]);
    const [loading , setLoading] = useState(true);

    // handle komponen detail nilai
    const [detailNilai , setDetailNilai] = useState(false);
    const [selectedDetail , setSelected] = useState(undefined);

    // ambil data submisi dari id user , dan ambil data info tryout terutama bagian tanggal mulai dan berakhir
    useEffect(() => {
        // fire.firestore().collection("submisi").where("user_id", "==", // dari user id ).get()
        fire.firestore().collection("submisi").where("user_id", "==", "AMX1JrbtPbM4zY4FPpPtQpptMEt2").get()
        .then( (snapshot) => {

            let temp = [] , waktu_mulai , waktu_akhir , mulai , akhir , obj;
            snapshot.forEach((doc) => {
                temp.push(doc.data())
                // ambil data waktu mulai dan waktu berakhir => get data dari collection tryout
                // fire.firestore().collection("tryout").doc(doc.data().tryout_id).get()
                // .then(response => {
                //     mulai = new Date(response.data().waktu_mulai.seconds * 1000)
                //     waktu_mulai = `${mulai.toLocaleString("en-US", {day: "numeric"})} ${mulai.toLocaleString("en-US", {month: "long"})} ${mulai.toLocaleString("en-US", {year: "numeric"})}`
                //     akhir = new Date(response.data().waktu_akhir.seconds * 1000)
                //     waktu_akhir = `${akhir.toLocaleString("en-US", {day: "numeric"})} ${akhir.toLocaleString("en-US", {month: "long"})} ${akhir.toLocaleString("en-US", {year: "numeric"})}`
                //     obj = {
                //         ...doc.data(),
                //         waktu_mulai,
                //         waktu_akhir,
                //     }
                //     setNilai([...nilai] , obj)
                // })
            })
            setNilai(temp)
            setLoading(false)
        })
    } , [])

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
                            products={nilai} handleDetail={(value , selectedDetail) => {setDetailNilai(value); setSelected(selectedDetail)}}
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
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <>
            <Breadcrumb style={{ marginTop: '1rem' }} >
                <Breadcrumb.Item href="#">NILAI TRYOUT</Breadcrumb.Item>
            </Breadcrumb>

            <h1 style={{ fontSize: '32px' , margin: '-10px 0 20px 0'}}>Nilai Try Out</h1>

            <div className="bg-white p-2">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <span>No</span>
                            </th>
                            <th>
                                <span>Nama TryOut</span>
                            </th>
                            <th>
                                <span> Tanggal Mulai TryOut </span>
                            </th>
                            <th>
                                <span> Tanggal Berakhir TryOut </span>
                            </th>
                            <th>
                                <span> Jenis TryOut </span>
                            </th>
                            <th>
                                <button 
                                    type="button" 
                                    className={getClassNamesFor('rata_rata')}
                                    onClick={() => requestSort('rata_rata')}
                                >
                                    Rata-Rata
                                </button>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item , index) => (
                            // masih looping banyaknya data , belum di set variabel datanya
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>Tryout Saintek</td>
                                <td>10 September 2021</td>
                                <td>11 September 2021</td>
                                <td>Reguler</td>
                                <td>800</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => props.handleDetail(true , index)} >Lihat Detail</Button>{' '}
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
