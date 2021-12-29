import './App.css';
import Login from "./component/Login"
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Main from './component/Main';
import { useState } from "react";



function App() {

  const [signedInUser, setSignedInUser] = useState({})
  
  return (


    <Router>
    
      <div className="container">
        {/* <Nav /> */}

          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      signedInUser.email ?
                      <Redirect to="/home" /> :
                      <Redirect to="/Login" /> 
                    )
                }}
              />
          <Route
                exact
                path="/home"
                render={() => {
                    return (
                      signedInUser.email ?  <Route path="/home" render={props => <Main authedUser = {signedInUser} log={setSignedInUser}/>} /> : <Redirect to="/login"/>

                     
                    )
                }}
              />


           <Route path="/login" render={props => <Login log = {setSignedInUser} />} />

          

          </Switch>
      </div>
  </Router>
  );
}

export default App;
