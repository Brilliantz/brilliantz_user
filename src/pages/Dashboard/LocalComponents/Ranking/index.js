// import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// import { Breadcrumb, Form } from 'react-bootstrap';
// import style from "../../Dashboard.module.css";

// const Ranking = () => {
//     const products = [
//         { id: 1, name: 'George', animal: 'Monkey' },
//         { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
//         { id: 3, name: 'Alice', animal: 'Giraffe' },
//         { id: 4, name: 'Foster', animal: 'Tiger' },
//         { id: 5, name: 'Tracy', animal: 'Bear' },
//         { id: 6, name: 'Joesph', animal: 'Lion' },
//         { id: 7, name: 'Tania', animal: 'Deer' },
//         { id: 8, name: 'Chelsea', animal: 'Tiger' },
//         { id: 9, name: 'Benedict', animal: 'Tiger' },
//         { id: 10, name: 'Chadd', animal: 'Lion' },
//         { id: 11, name: 'Delphine', animal: 'Deer' },
//         { id: 12, name: 'Elinore', animal: 'Bear' },
//         { id: 13, name: 'Stokes', animal: 'Tiger' },
//         { id: 14, name: 'Tamara', animal: 'Lion' },
//         { id: 15, name: 'Zackery', animal: 'Bear' }
//     ];

//     const columns = [
//         { dataField: 'id', text: 'Id' , sort: true},
//         { dataField: 'name', text: 'Name', sort: true },
//         { dataField: 'animal', text: 'Animal' }
//     ];

//     const { SearchBar } = Search;

//     return (
//         <div>
//             <Breadcrumb style={{ marginTop: '1rem' }} className={style.breadcrumb}>
//                 <Breadcrumb.Item href="#">RANKING</Breadcrumb.Item>
//             </Breadcrumb>

//             <h1 style={{ fontSize: '32px' , margin: '-10px 0 20px 0'}}>Ranking</h1>

//             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
//                 <ToolkitProvider
//                     bootstrap4
//                     keyField='id'
//                     data={products}
//                     columns={columns}
//                     search
//                 >
//                     {
//                         props => (
//                             <div>
//                                 <div className="d-flex justify-content-between align-items-end">
//                                     <SearchBar {...props.searchProps} srText="" />
//                                     <Form.Select style={{ width: '186px', height: '40px', borderRadius: '20px', border: '1px solid #252D30' }}>
//                                         <option>Default select</option>
//                                     </Form.Select>
//                                 </div>
//                                 <hr />
//                                 <BootstrapTable
//                                     {...props.baseProps}
//                                     bordered={false}
//                                     striped
//                                     hover
//                                     condensed
//                                     sort={true}
//                                 />
//                             </div>
//                         )
//                     }
//                 </ToolkitProvider>
//             </div>

//         </div>
//     )
// }

// export default Ranking


import React from 'react'

const Ranking = () => {
    return (
        <div>
            Ranking
        </div>
    )
}

export default Ranking

