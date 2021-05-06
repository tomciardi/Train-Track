import { Switch, Route } from "react-router-dom";

import Home from '../Pages/Home'
import Tutorial from '../Pages/Tutorial';

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/tutorial" component={ Tutorial }/>
            </Switch>
        </>
    )
}