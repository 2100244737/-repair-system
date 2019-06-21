import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from'../viows/Login'
class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Login}>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
export default Container