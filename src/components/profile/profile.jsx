import React, { Component } from "react";
import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";
import "./profile.css";
import ProfPassword from "./profpassword";
import ProfInfo from "./profinfo";
import ProfCard from "./profcard";
class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="main-content-for-profile">
            <div className="navbar-of-main-content-for-profile">
              <NavLink
                exact
                to="/profinfo/"
                activeClassName="selected-for-prof-info"
              >
                Ma’lumotlar
              </NavLink>
              <NavLink to="/profcard" activeClassName="selected-for-prof-info">
                Karta
              </NavLink>
              <NavLink
                to="/profpassword"
                activeClassName="selected-for-prof-info"
              >
                Parol
              </NavLink>
            </div>
            <div className="main-content-div-for-profile-wrapper">
              <Switch>
                <Route exact path="/profinfo">
                  <ProfInfo />
                </Route>
                <Route path="/profcard">
                  <ProfCard />
                </Route>
                <Route path="/profpassword">
                  <ProfPassword />
                </Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Profile;
