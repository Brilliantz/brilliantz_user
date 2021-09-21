import React, { useState } from 'react';
import { Breadcrumb, InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap"
import style from "./ranking.module.css";
import "../style.css";
import { SearchIcon } from "../../../../components";

const Ranking = () => {
    return (
        <>
            <ItemTable
                items={[
                    { id: 1, name: 'Muhammad Nizar', asal_sekolah: 'SMAN 1 Surabaya', nilai_tka: 550, nilai_tps: 650, rata_rata: 750 },
                    { id: 2, name: 'Muhammad Bagus', asal_sekolah: 'SMAN 2 Surabaya', nilai_tka: 650, nilai_tps: 750, rata_rata: 850 },
                    { id: 3, name: 'Surya Ramadhan', asal_sekolah: 'SMAN 3 Surabaya', nilai_tka: 750, nilai_tps: 850, rata_rata: 950 },
                ]}
            />
        </>
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

    const [selectedTryout , setSelectedTryout] = useState("");
    const handleSelect = (e) => {
        setSelectedTryout(e);
        console.log(e);
    }

    const [searchInput, setSearchInput] = useState('');
    const [filteredResult, setFilteredResult] = useState([]);

    const searchItems = (value) => {
        setSearchInput(value)
        if (searchInput !== '') {
            const filteredData = items.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResult(filteredData);
        } else {
            setFilteredResult(items)
        }
    }

    return (
        <>
            <Breadcrumb style={{ marginTop: '1rem' }} className={style.breadcrumb} >
                <Breadcrumb.Item href="#">RANKING</Breadcrumb.Item>
            </Breadcrumb>

            <h1 style={{ fontSize: '32px', margin: '-10px 0 20px 0' }}>Ranking</h1>

            <div style={{ boxSizing: 'border-box' }} className="bg-white p-3">
                <div className="d-flex justify-content-between">
                    <InputGroup className="mb-3 w-50" >
                        <InputGroup.Text id="basic-addon1" style={{ marginLeft: '0' }}><SearchIcon /></InputGroup.Text>
                        <FormControl
                            placeholder="Cari Nama"
                            aria-label="Cari Nama"
                            aria-describedby="basic-addon1"
                            type="text"
                            onChange={(e) => searchItems(e.target.value)}
                        />
                    </InputGroup>

                    <DropdownButton
                        alignRight
                        title={`${selectedTryout === "" ? "Pilih Tryout" : selectedTryout}`}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                        variant="outline-secondary"
                    >
                        <Dropdown.Item eventKey="TryOut Saintek 1">TryOut Saintek 1</Dropdown.Item>
                        <Dropdown.Item eventKey="TryOut Saintek 2">TryOut Saintek 2</Dropdown.Item>
                        <Dropdown.Item eventKey="TryOut Saintek 3">TryOut Saintek 3</Dropdown.Item>
                    </DropdownButton>
                </div>

                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.th}>
                                <span className={style.th_span} type="button">No</span>
                            </th>
                            <th className={style.th}>
                                <span className={style.th_span} type="button">Nama Siswa</span>
                            </th>
                            <th className={style.th}>
                                <span className={style.th_span} type="button">Asal SMA</span>
                            </th>
                            <th className={style.th}>
                                <button
                                    type="button"
                                    onClick={() => requestSort('nilai_tka')}
                                    className={`${getClassNamesFor('nilai_tka') === "ascending" ? "ascending" : getClassNamesFor('nilai_tka') === "descending" ? "descending" : "default"} ${style.thead_button}`}
                                >
                                    Nilai TKA
                                </button>
                            </th>
                            <th className={style.th}>
                                <button
                                    type="button"
                                    onClick={() => requestSort('nilai_tps')}
                                    className={`${getClassNamesFor('nilai_tps') === "ascending" ? "ascending" : getClassNamesFor('nilai_tps') === "descending" ? "descending" : "default"} ${style.thead_button}`}
                                >
                                    Nilai TPS
                                </button>
                            </th>
                            <th className={style.th}>
                                <button
                                    type="button"
                                    onClick={() => requestSort('rata_rata')}
                                    className={`${getClassNamesFor('rata_rata') === "ascending" ? "ascending" : getClassNamesFor('rata_rata') === "descending" ? "descending" : "default"} ${style.thead_button}`}
                                >
                                    Nilai Rata-Rata
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchInput.length > 1 ? (
                            filteredResult.map((item, index) => {
                                return (
                                    <tr className={style.tr} key={item.id}>
                                        <td className={style.td}>{index + 1}</td>
                                        <td className={style.td}>{item.name}</td>
                                        <td className={style.td}>{item.asal_sekolah}</td>
                                        <td className={style.td}>{item.nilai_tka}</td>
                                        <td className={style.td}>{item.nilai_tps}</td>
                                        <td className={style.td}>{item.rata_rata}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            items.map((item, index) => {
                                return (
                                    <tr className={style.tr} key={item.id}>
                                        <td className={style.td}>{index + 1}</td>
                                        <td className={style.td}>{item.name}</td>
                                        <td className={style.td}>{item.asal_sekolah}</td>
                                        <td className={style.td}>{item.nilai_tka}</td>
                                        <td className={style.td}>{item.nilai_tps}</td>
                                        <td className={style.td}>{item.rata_rata}</td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Ranking

