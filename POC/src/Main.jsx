import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import About from "./About";
import Team from "./Team";
import "./Main.css";
// import Weather from "./Weather";
// import NewTeamMember from "./NewTeamMember";

const Main = () => {
  return (
    <HashRouter>
      <div className="menu-postion">
        <div className="menu-left-part">
          <h1>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </h1>
          <div className="ui divider"></div>
          <h1 id="about">
            <NavLink to="/about">About</NavLink>
          </h1>
          <div className="ui divider"></div>
          <h1>
            <NavLink to="/team">Team</NavLink>
          </h1>
          {/* <div className="ui divider"></div>
            <h1><NavLink to="/addmember">New Team Member</NavLink></h1>
            <div className="ui divider"></div>
            <h1><NavLink to="/weather">Weather Report</NavLink></h1> */}
        </div>

        <div className="detail-right-part">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          {/* <Route path="/weather" component={Weather} />
            <Route path="/addmember" component={NewTeamMember} /> */}
        </div>
      </div>
    </HashRouter>
  );
};

export default Main;
