import React , {useState , useEffect} from 'react'
import { Breadcrumb } from 'react-bootstrap';
import {ProgramList , ProgramDetail, ProgramBoughtList, OtherProgramList, WebinarDetail, TryOutDetail} from "./LocalComponents";

import {
    BrowserRouter as Router, 
    Link, 
    Route, 
    Switch , 
    useParams, 
    useHistory, 
    useRouteMatch
} from "react-router-dom";
import fire from "../../../../config/firebase";

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

    let {path , url} = useRouteMatch();
    const history = useHistory();

    return (
        <div>
            {/* content  */}
            <div>
                <Router>
                    <Switch>
                        <Route exact path={path}>
                            <ProgramList otherPrograms={programsData} />
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
    let {choose} = useParams();

    return (
        <div>
            {
                choose === "program-detail" ? (
                    <ProgramDetail />
                ) : choose === "program-bought" ? (
                    <ProgramBoughtList />
                ) : choose === "other-programs" ? (
                    <OtherProgramList />
                ) : choose === "webinar-detail" ? (
                    <WebinarDetail />
                ) : choose === "tryout-detail" ? (
                    <TryOutDetail />
                ) : (
                    <span>Choose</span>
                )
            }
        </div>
    )
}

export default DashboardView
