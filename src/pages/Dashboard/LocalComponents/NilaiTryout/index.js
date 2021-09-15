import React , {useState} from 'react';
import {Breadcrumb, Button} from "react-bootstrap"
import { SpinnerLoader } from '../../../../components';
import DetailNilai from './DetailNilai';
import "../style.css";
import style from "./nilaiTryout.module.css";

const NilaiTryout = ({size}) => {
    // handle komponen detail nilai
    const [detailNilai , setDetailNilai] = useState(false);
    const [selectedDetail , setSelected] = useState(undefined);
    const [loading , setLoading] = useState(false);
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
                            items={[
                                { id: 1, tryout: 'Tryout Saintek 1', waktu_mulai: '17 Maret 2021' , waktu_akhir: '20 Maret 2021' , jenis_tryout: 'Reguler' , rata_rata: 500 },
                                { id: 2, tryout: 'Tryout Saintek 2', waktu_mulai: '19 Juni 2021' , waktu_akhir: '24 Juni 2021' , jenis_tryout: 'Partner' , rata_rata: 600 },
                                { id: 3, tryout: 'Tryout Saintek 3', waktu_mulai: '22 Agustus 2021' , waktu_akhir: '25 Agustus 2021' , jenis_tryout: 'Reguler' , rata_rata: 300 },
                            ]} 
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
                                <td className={style.td}>{item.tryout}</td>
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
