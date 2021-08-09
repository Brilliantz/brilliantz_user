import React from 'react'
import {Home , About} from "./LocalComponents";
import style from "./Dashboard.module.css";
import { DashboardIcon , Logo } from '../../components';
import styled from 'styled-components';
import { Breadcrumb , Button} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div style={{
            backgroundColor: '#F8F8F8',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
        }}>
            {/* sidebar */}
            <div className={style.side_menu}>
                <ul className={style.side_menu_items}>
                    <li className="d-flex align-items-center" style={{marginBottom: '20px' , height: '80px' , padding: '0 0 0 10px'}}>
                        <span className={`${style.text} ${style.text_logo}`}>
                            <Logo />
                        </span>
                    </li>
                    <li className={style.list}>
                        <a className={`${style.text} ${style.text_link}`}>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className={style.list}>
                        <a className={`${style.text} ${style.text_link}`}>
                            <DashboardIcon />
                            <span>About</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={`${style.content} h-100`}>
                {/* nav */}
                <div className={`${style.nav} ${style.content_position}`} style={{border: '2px solid #DADCE0'}}>
                    <CustomContainer className="d-flex justify-content-end h-100">
                        <div className="account d-flex align-items-center justify-content-end">
                            <div style={{width: '32px' , height: '32px' , backgroundColor: '#FFB332' , borderRadius: '50%'}}></div>
                            <span>Muhammad Ridlo</span>
                        </div>
                    </CustomContainer>
                </div>

                {/* content  */}
                <div className={`${style.content_position} ${style.contens}`}>
                    <CustomContainer>
                        <Breadcrumb style={{marginTop: '1rem'}} className={style.breadcrumb}>
                            <Breadcrumb.Item href="#">PROFIL</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h1 style={{fontSize: '32px'}}>Profil</h1>
                            <Button variant="outline-danger" className="rounded" style={{width: '156px' , height: '40px'}}>Keluar dari Akun</Button>
                        </div>


                        <div style={{width: '100%' , height: '496px' , backgroundColor: 'white' , borderRadius: '8px'}}></div>

                    </CustomContainer>
                </div>
            </div>
        </div>
    )
}

const CustomContainer = styled.div`
    width: 95%;
    margin: auto;
`;

export default Dashboard
