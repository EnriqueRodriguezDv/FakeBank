import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransfer, addHistory } from "../action/index";

import FormPiece from "../components/transfer/FormPiece";

import "../assets/styles/container/transfer.scss";

const Transfer = (props) => {
  const date = new Date();
  const [form, setValues] = useState({
    transfer: "",
    to: "",
    concept: "",
  });

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const userToSendTransfer = props.user.find(
      (item) => item.username === form.to
    );
    const userOnlineHistory = {
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      username: props.user.find((item) => item.isOnline).username,
      move: -Number(form.transfer),
      wallet:
        props.user.find((item) => item.isOnline).wallet - Number(form.transfer),
      concept: form.concept,
    };
    const userToTransferHistory = {
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      username: form.to,
      move: Number(form.transfer),
      wallet:
        props.user.find((item) => item.username === form.to).wallet +
        Number(form.transfer),
      concept: form.concept,
    };

    event.preventDefault();

    if (!form.transfer || form.transfer < 0) {
      alert("nothing to transfer");
    } else if (props.user.find((item) => item.isOnline).username === form.to) {
      alert("for you?");
    } else if (
      props.user.find((item) => item.isOnline).wallet - form.transfer <
      0
    ) {
      alert("you don´t have all money");
    } else if (userToSendTransfer) {
      props.addHistory(userOnlineHistory);
      props.addHistory(userToTransferHistory);
      props.addTransfer(form);
      setValues({
        transfer: "",
        to: "",
        concept: "",
      });
      document.getElementById("formTransfer").reset();
    } else {
      alert("something wrong");
    }
  };

  return (
    <section className="transfer-container">
      <h2 className="text-center">
        Wallet: {props.user.find((item) => item.isOnline).wallet}
      </h2>
      <form
        id="formTransfer"
        className="container-fluid text-center"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="form col-12 col-lg-6">
            <h2 className="form col-6">
              From {props.user.find((item) => item.isOnline).username}
            </h2>
            <FormPiece
              title="Want you transfer?"
              inputType="number"
              name="transfer"
              handleChange={handleChange}
            />
          </div>
          <div className="form col-12 col-lg-6">
            <FormPiece
              title="To"
              inputType="text"
              name="to"
              handleChange={handleChange}
            />
            <FormPiece
              title="Concept"
              inputType="text"
              name="concept"
              handleChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="m-1 btn-success btn">
          Send Fake Money!
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
  addTransfer,
  addHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
