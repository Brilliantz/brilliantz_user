import React from 'react';
import { Breadcrumb, InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap"
import "./ranking.css"
import { SearchIcon } from "../../../../components";

const Ranking = () => {
    return (
        <>
            <ProductTable
                products={[
                    { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
                    { id: 2, name: 'Milk', price: 1.9, stock: 32 },
                    { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
                    { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
                    { id: 5, name: 'Butter', price: 0.9, stock: 99 },
                    { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
                    { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
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

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const handleSelect = (e) => {
        console.log(e);
    }

    return (
        <>
            <Breadcrumb style={{ marginTop: '1rem' }} >
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
                        />
                    </InputGroup>

                    <DropdownButton
                        alignRight
                        title="Dropdown right"
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                        <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                        <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                    </DropdownButton>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>
                                <span type="button">No</span>
                            </th>
                            <th>
                                <span type="button">Nama Siswa</span>
                            </th>
                            <th>
                                <span type="button">Asal SMA</span>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('name')}
                                    className={getClassNamesFor('name')}
                                >
                                    Nilai TKA
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('price')}
                                    className={getClassNamesFor('price')}
                                >
                                    Nilai TPS
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('stock')}
                                    className={getClassNamesFor('stock')}
                                >
                                    Nilai Rata-Rata
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>Wahyu Puji Ramadhan</td>
                                <td>SMA Negeri Sejahtera Surabaya Timur Tengah</td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Ranking

