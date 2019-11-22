import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from '../src/screens/Login'
import Home from '../src/screens/Home'
import {connect} from 'react-redux';


const AuthRoutes = [
  {
    path: "/login",
    component: Login
  }
];

const AppRoutes = [
  {
    path: "/home",
    component: Home
  }
];


//should figure out a way to do the authentication
 const AppRouteFunc = ({component: Component, isAuthenticated,  ...rest }) => {
  
return (
  <Route {...rest} render={(props) => (
    isAuthenticated === true ? <Component {...props} /> : <Redirect exact to='/login' />
  )} />)
 }



 const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  
  }
}



const AppRoute = connect(mapStateToProps)(AppRouteFunc)

function Routing (){
    return(
      <Router>
      <div>  
        <Switch>
          <AppRoute exact path="/" component={Home}></AppRoute> {/*Should go to auth loading with normal route*/}
          {AuthRoutes.map((route, i) => (
            <Route key={i} exact path={route.path} component={route.component} />
          ))}
          {AppRoutes.map((route, i) => (
            <AppRoute key={i} exact path={route.path} component={route.component} />
          ))}
        </Switch> 
      </div>
    </Router>
)

}


export default Routing
  
