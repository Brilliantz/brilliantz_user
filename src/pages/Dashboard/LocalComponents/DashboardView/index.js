import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import {ProgramList , ProgramDetail, ProgramBoughtList, OtherProgramList, WebinarDetail} from "./LocalComponents";

import {
    BrowserRouter as Router, 
    Link, 
    Route, 
    Switch , 
    useParams, 
    useHistory, 
    useRouteMatch
} from "react-router-dom";


const DashboardView = () => {
    let {path , url} = useRouteMatch();
    const history = useHistory();

    return (
        <div>
            {/* content  */}
            <div>
                <Router>
                    <Switch>
                        <Route exact path={path}>
                            <ProgramList />
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
                ) : (
                    <span>Choose</span>
                )
            }
        </div>
    )
}

export default DashboardView
