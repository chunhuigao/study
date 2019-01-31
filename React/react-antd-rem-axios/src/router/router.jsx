import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Login from './../component/login/login.jsx'
import userInfor from './../component/userInfor/userInfor.jsx'
import userAdd from './../component/userAdd/userAdd.jsx'


class DomRouter extends React.Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/users/add" component={userAdd} />
                    <Route path="/users" component={userInfor} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default DomRouter