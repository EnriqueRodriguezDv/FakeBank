import React from "react";
import { connect } from "react-redux";

import "../assets/styles/container/history.scss";

const History = (props) => {
  return (
    <section className="section-history">
      <h2 className="text-center">History</h2>
      <div className="row">
        <h5 className="col-3 text-center">Move</h5>
        <h5 className="col-3 text-center">Concept</h5>
        <h5 className="col-3 text-center">Wallet</h5>
        <h5 className="col-3 text-center">Date</h5>
      </div>
      {props.user
        .find((item) => item.isOnline)
        .history.map((item, index) => {
          return (
            <div key={index} className="row">
              <p className="col-3 text-center">{item.move}</p>
              <p className="col-3 text-center">{item.concept}</p>
              <p className="col-3 text-center">{item.wallet}</p>
              <p className="col-3 text-center">{item.date}</p>
            </div>
          );
        })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(History);
