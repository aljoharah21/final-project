import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  handleLogout = () => {
    const { log } = this.props;
    log({})
  };

  render() {
    const {  authedUser } = this.props;
    return (
      <nav className="nav d-flex justify-content-around border-bottom mb-2 pt-4 bg-light">

<div className='col-md-4'>

<h1 className="customHeader">plantified</h1>
</div>

    
        <ul >
          

          {authedUser.email ? (
            <li className="d-flex justify-content-end">
              <h4>Welcome, {authedUser.username}</h4>
             
              <NavLink
                to="/login"
                onClick={this.handleLogout}
                activeClassName="active"
                className="mx-2 text-success"
              >
                Logout
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}



export default Nav;
