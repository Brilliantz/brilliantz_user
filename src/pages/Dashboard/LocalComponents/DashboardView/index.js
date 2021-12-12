import React , {useState , useEffect} from 'react'
import { Breadcrumb } from 'react-bootstrap';
import {
    BrowserRouter as Router, 
    Route, 
    Switch , 
    useParams, 
    useRouteMatch
} from "react-router-dom";
import fire from "../../../../config/firebase";


import AllPrograms from './AllPrograms';
import ProgramsBought from './ProgramsBought';
import TryOuts from './TryOuts';
import Webinars from './Webinars';
import WebinarDetail from './WebinarDetail';
import TryOutDetail from './TryOutDetail';

const DashboardView = () => {
    const [programsData , setprogramsData] = useState([]);

    useEffect(() => {
        fire.firestore().collection("webinar").get()
        .then(webinars => {
            let tempWebinarArray = [];

            webinars.docs.forEach((item)=>{
                tempWebinarArray.push(item.data());
            })
            setprogramsData(tempWebinarArray); 
        })
        .catch(error => { console.log("error" , error) });
    } , []);

    let {path} = useRouteMatch();

    return (
        <div>
            {/* content  */}
            <div>
                <Router>
                    <Switch>
                        <Route exact path={path}>
                            <AllPrograms />
                        </Route>
                        <Route exact path={`${path}/:choose`}>
                            <Content />
                        </Route>
                    </Switch>
                </Router>
            </div>
            
        </div>
    )
}

const Content = () => {
    let { choose } = useParams();
    return (
        <div>
            {
                choose === "program-bought" ? (
                    <ProgramsBought />
                ) : choose === "try-out" ? (
                    <TryOuts />
                ) : choose === "webinar" ? (
                    <Webinars />
                ) : choose === "tryout-detail" ? (
                    <TryOutDetail />
                ) : choose === "webinar-detail" ? (
                    <WebinarDetail />
                ) : (
                    <AllPrograms />
                )
            }
        </div>
    )
}

export default DashboardView
