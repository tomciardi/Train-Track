import { Switch, Route } from "react-router-dom";

import Home from '../Pages/Home'
import Tutorial from '../Pages/Tutorial';
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/tutorial" component={ Tutorial }/>
                <Route exact path="/signup" component={ SignUp }/>
                <Route exact path="/login" component={ Login }/>
            </Switch>
        </>
    )
}