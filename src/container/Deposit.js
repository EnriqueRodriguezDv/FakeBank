import React, { useState } from "react";
import { connect } from "react-redux";
import { addMoneyWallet, removeMoneyWallet, addHistory } from "../action/index";

import "../assets/styles/container/deposit.scss";

const Deposit = (props) => {
  const date = new Date();
  const [form, setValues] = useState({
    deposit: "",
    extract: "",
  });

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const depositHistory = {
    date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
    username: props.user.find((item) => item.isOnline).username,
    move: Number(form.deposit),
    wallet:
      props.user.find((item) => item.isOnline).wallet + Number(form.deposit),
    concept: "deposit",
  };
  const extractHistory = {
    date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
    username: props.user.find((item) => item.isOnline).username,
    move: -Number(form.extract),
    wallet:
      props.user.find((item) => item.isOnline).wallet - Number(form.extract),
    concept: "extract",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.deposit > 0) {
      props.addMoneyWallet(form.deposit);
      props.addHistory(depositHistory);
    }
    if (form.extract > 0) {
      props.removeMoneyWallet(form.extract);
      props.addHistory(extractHistory);
    }
    document.getElementById("formDeposit").reset();
    setValues({
      deposit: "",
      extract: "",
    });
  };

  return (
    <section className="deposit-container">
      <h2 className="text-center">
        Wallet: {props.user.find((item) => item.isOnline).wallet}
      </h2>
      <form
        id="formDeposit"
        onSubmit={handleSubmit}
        className="move-money-container"
      >
        <div className="move-money-item align-items-end container-xl">
          <h2>How much do you want to deposit</h2>
          <h6>♥ free,free,free ♥</h6>
          <input type="number" name="deposit" onChange={handleChange} />
        </div>
        <div className="move-money-item align-items-start container-xl">
          <h2>How much do you want to extract</h2>
          <h6>Goodbye money 😢</h6>
          <input type="number" name="extract" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">
          Click here to finish!
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  addMoneyWallet,
  removeMoneyWallet,
  addHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
