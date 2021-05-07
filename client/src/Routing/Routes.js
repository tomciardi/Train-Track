import { Component } from "react"
import { Switch, Route } from "react-router-dom";

import Home from '../Pages/Home'
import Tutorial from '../Pages/Tutorial';
import Dashboard from '../Pages/Dashboard'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Forms from '../Pages/Forms/Forms'
import FormCompany from '../Pages/Forms/FormCompany'
import FormStation from '../Pages/Forms/FormStation'
import FormTrain from '../Pages/Forms/FormTrain'
import FormRailroad from '../Pages/Forms/FormRailroad'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/dashboard" component={ Dashboard }/>
                <Route exact path="/tutorial" component={ Tutorial }/>
                <Route exact path="/signup" component={ SignUp }/>
                <Route exact path="/login" component={ Login }/>
                <Route exact path="/profile" component={ Profile }/>
                <Route exact path="/forms" component={ Forms }/>
                <Route exact path="/formcompany" component={ FormCompany }/>
                <Route exact path="/formstation" component={ FormStation }/>
                <Route exact path="/formtrain" component={ FormTrain }/>
                <Route exact path="/formrailroad" component={ FormRailroad }/>
            </Switch>
        )
    }
}
