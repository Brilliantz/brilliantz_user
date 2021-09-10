import React from 'react'
import {DashboardView , NilaiTryout , Ranking , Profil} from "./LocalComponents";
import style from "./Dashboard.module.css";
import { DashboardIcon , Logo , NilaiTryoutIcon , RankingIcon , ProfilIcon} from '../../components';
import styled from 'styled-components';
import {
    BrowserRouter as Router, 
    Link, 
    Route, 
    Switch , 
    useParams, 
    useHistory, 
    useRouteMatch
} from "react-router-dom";
// import fire from "../../config/firebase"

const Dashboard = ({size}) => {
    let {path , url} = useRouteMatch();
    const history = useHistory();

    // get data user aktif dari localStorage 
    // get data from localStorage
    let dataUser;
    // cek jika key dataUser ada datanya , get datanya
    if (localStorage.key("dataUser") !== null) {
        dataUser = JSON.parse(localStorage.getItem("dataUser"));
    } else {
        // jika gaada langsung arahkan ke halaman login
        window.location.href = "/login";
    }

    return (
        <div style={{
            backgroundColor: '#F8F8F8',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            overflow: 'auto',
        }}>
            <Router>

                {/* sidebar */}
                <div className={`${size.width < 660 ? 'd-none' : 'd-flex'}  ${style.side_menu}`}>
                    <ul className={style.side_menu_items}>
                        <li className="d-flex align-items-center" style={{marginBottom: '20px' , height: '80px' , padding: '0 0 0 10px'}} onClick={() => history.push('/')}>
                            <span className={`${style.text} ${style.text_logo}`}>
                                <Logo />
                            </span>
                        </li>
                        <List icon={DashboardIcon} title="Dashboard" path="/dashboard" />
                        <List icon={NilaiTryoutIcon} title="Nilai TryOut" path={`${url}/nilai-tryout`} />
                        <List icon={RankingIcon} title="Ranking" path={`${url}/ranking`} />
                        <List icon={ProfilIcon} title="Profil" path={`${url}/profil`} />
                    </ul>
                </div>

                <div className={`${style.link_collapse} fixed-bottom`} style={{display: `${size.width < 660 ? 'block' : 'none'}`}} >
                    <ul className="d-flex h-100 w-100 justify-content-evenly">
                        <li className={style.list}>
                            <Link to="/dashboard" className="d-flex justify-content-center flex-column p-2">
                                <DashboardIcon />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className={style.list}>
                            <Link to={`${url}/nilai-tryout`} className="d-flex justify-content-center flex-column p-2">
                                <NilaiTryoutIcon />
                                <span>Nilai Tryout</span>
                            </Link>
                        </li>
                        <li className={style.list}>
                            <Link to={`${url}/ranking`} className="d-flex justify-content-center flex-column p-2">
                                <RankingIcon />
                                <span>Ranking</span>
                            </Link>
                        </li>
                        <li className={style.list}>
                            <Link to={`${url}/profil`} className="d-flex justify-content-center flex-column p-2">
                                <ProfilIcon />
                                <span>Profil</span>
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className='h-100' style={{marginLeft: `${size.width < 665 ? '0' : '13rem'}` , width: `${size.width < 660 ? '100%' : 'calc(100% - 13rem)'}` }} >
                    {/* nav */}
                    <div className={`${style.nav} ${style.content_position}`} style={{border: '2px solid #DADCE0'}}>
                        <CustomContainer className="d-flex h-100">
                            <div className="account d-flex align-items-center w-100 justify-content-between">
                                {
                                    size.width < 660 ? (
                                        <div>
                                            <Logo />
                                        </div>
                                    ) : (
                                        <span></span>
                                    )
                                }
                                <div className="d-flex align-items-center">
                                    <div style={{width: '32px' , height: '32px' , backgroundImage: `url(${dataUser.photoURL})` , backgroundSize: 'cover' , backgroundPosition: 'center' , borderRadius: '50%'}}></div>
                                    <span>{dataUser.displayName}</span>
                                </div>
                            </div>
                        </CustomContainer>
                    </div>

                    {/* content  */}
                    <div className={`${style.content_position}`}>
                        <CustomContainer>
                            <Switch>
                                <Route exact path={path}>
                                    <DashboardView />
                                </Route>
                                <Route exact path={`${path}/:choose`}>
                                    <Content size={size} dataUser={dataUser} />
                                </Route>
                            </Switch>
                        </CustomContainer>
                    </div>
                </div>
            </Router>
        </div>
    )
}

const Content = ({size , dataUser}) => {
    let {choose} = useParams();
    return (
        <div style={{paddingBottom: '50px' , boxSizing: 'border-box'}}>
            {
                choose === "nilai-tryout" ? (
                    <NilaiTryout size={size} />
                ) : choose === "ranking" ? (
                    <Ranking />
                ) : choose === "profil" ? (
                    <Profil size={size} dataUser={dataUser} />
                ) : (
                    <span>Choose</span>
                )
            }
        </div>
    )
}

const List = ({icon , title , path , ...rest}) => {
    const Icon = icon;
    return (
        <>
            <li className={`${style.list} my-2`} {...rest}>
                <Link to={path} className={`${style.text} ${style.text_link}`}>
                    <Icon />
                    <span>{title}</span>
                </Link>
            </li>
        </>
    )
}

const CustomContainer = styled.div`
    width: 95%;
    margin: auto;
`;

export default Dashboard
