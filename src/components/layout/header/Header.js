import React from "react";
import { Switch, Route } from "react-router-dom";

import HeaderNewSession from "./HeaderNewSession";
import HeaderPrincipal from "./HeaderPrincipal";

import logoBank from "../../../assets/static/logoBank.png";

const Header = () => {
  return (
    <section className="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
          <img
            src={logoBank}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
            loading="lazy"
          />
          Bank Lions
        </div>
        <Switch>
          <Route exact path="/" component={HeaderNewSession} />
          <Route component={HeaderPrincipal} />
        </Switch>
      </nav>
    </section>
  );
};

export default Header;
