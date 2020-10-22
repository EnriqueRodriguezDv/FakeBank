import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addHistory, closeSession, closeMonopolyPlayer } from "../../../action/index";

import "../../../assets/styles/components/headerPrincipal.scss";

const HeaderPrincipal = (props) => {
  const date = new Date();

  const handleClick = () => {
    props.addHistory({
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      username: props.user.find((item) => item.isOnline).username,
      move: 0,
      wallet: props.user.find((item) => item.isOnline).wallet,
      concept: "Close session",
    });
    props.closeMonopolyPlayer();
    props.closeSession();
  };

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/principal">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown cursor-show">
            <div
              className="nav-link"
              id="navbarDropdownMenuLink"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Option User
            </div>
            <div
              className="dropdown-menu bg-dark m-0"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/transfer">
                Wire Transfer
              </Link>
              <Link className="dropdown-item" to="/moreMoney">
                Deposit / Extract
              </Link>
              <Link className="dropdown-item" to="/monopoly">
                Monopoly Card
              </Link>
              <Link className="dropdown-item" to="/history">
                History
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleClick}>
              Close Session
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addHistory,
  closeSession,
  closeMonopolyPlayer
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderPrincipal));
