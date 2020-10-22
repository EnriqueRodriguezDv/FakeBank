import React from "react";
import { connect } from "react-redux";

import SecondHeader from "../components/global/SecondHeader";
import OptionUser from "../components/principal/OptionUser";

import "../assets/styles/container/principal.scss";

import happyLion from "../assets/static/leonFeliz.jpg";
import transfer from "../assets/static/transfer.png";
import pig from "../assets/static/pig.jpg";
import monopoly from "../assets/static/monopoly.jpg";
import lionMoney from "../assets/static/logoBank.png";

const Principal = (props) => {
  return (
    <section id="principal">
      <SecondHeader img={happyLion} title={"What you want today?"} />
      <h2 className="text-center">
        Wallet: {props.user.find((item) => item.isOnline).wallet}
      </h2>
      <div className="container-fluid">
        <div className="row ">
          <OptionUser img={transfer} title={"Wire Transfer"} link="transfer" />
          <OptionUser img={pig} title={"Deposit / Extract"} link="moreMoney" />
        </div>
        <div className="row ">
          <OptionUser img={monopoly} title={"Monopoly"} link="monopoly" />
          <OptionUser img={lionMoney} title={"History"} link="history" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Principal);
