import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from'../viows/Login'
import Layout from'../viows/Layout'
import Sended from'../viows/Sended' // 已派单
import AllRecord from'../viows/AllRecord' // 所有维修记录
class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Login} exact/>
                     <Route path="/layout" render={(props) => (
                         <Layout {...props}>
                             <Switch>
                                 <Route path="/layout" component={AllRecord} exact/>
                                 <Route path="/layout/sended" component={Sended} />
                             </Switch>
                         </Layout>
                     )}/>
                </Switch>
            </Router>
        )
    }
}
export default Container