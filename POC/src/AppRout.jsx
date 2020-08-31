import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Login from './Login';
import Welcome from './Welcome';

const AppRoute = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/Welcome' component={Welcome} />
            </Switch>
        </Router>
    )
}
export default AppRoute;