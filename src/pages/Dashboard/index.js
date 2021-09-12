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
                <div className={style.side_menu}>
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

                <div className={`${style.content} h-100`}>
                    {/* nav */}
                    <div className={`${style.nav} ${style.content_position}`} style={{border: '2px solid #DADCE0'}}>
                        <CustomContainer className="d-flex justify-content-end h-100">
                            <div className="account d-flex align-items-center justify-content-end">
                                <div style={{width: '32px' , height: '32px' , backgroundImage: `url(${dataUser.photoURL})` , backgroundSize: 'cover' , backgroundPosition: 'center' , borderRadius: '50%'}}></div>
                                <span>{dataUser.displayName}</span>
                            </div>
                        </CustomContainer>
                    </div>

                    {/* content  */}
                    <div className={`${style.content_position} ${style.contens}`}>
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

    console.log(choose);

    return (
        <div>
            {
                choose === "nilai-tryout" ? (
                    <NilaiTryout />
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

const List = ({icon , title , path}) => {
    const Icon = icon;
    return (
        <>
            <li className={style.list}>
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
