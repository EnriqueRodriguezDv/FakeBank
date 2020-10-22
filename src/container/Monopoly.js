import React, { useState } from "react";
import { connect } from "react-redux";
import { addMoneyWallet, removeMoneyWallet, addHistory } from "../action"

import Player from "../components/monopoly/Player";

import "../assets/styles/container/monopoly.scss";

const Monopoly = (props) => {
  const date = new Date()
  const handleClick = (event) => {
    switch (event.target.value) {
      case "2":
        document.getElementById("playerThree").classList.add("d-none");
        document.getElementById("playerFour").classList.add("d-none");
        break;
      case "3":
        document.getElementById("playerThree").classList.remove("d-none");
        document.getElementById("playerFour").classList.add("d-none");
        break;
      case "4":
        document.getElementById("playerThree").classList.remove("d-none");
        document.getElementById("playerFour").classList.remove("d-none");
        break;
    }
  };

  const [form, setValues] = useState({
    date: "",
    username: "",
    move: 0,
    wallet: "",
    concept: "",
  })


  const handleChangeInput = (event) => {
    setValues({
      ...form,
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      move: event.target.value,
      wallet: props.user.find(item => item.isOnline).wallet + Number(event.target.value),
    })
  }

  const handleClickToMoveWallet2 = (event) => {
    const userSelect = props.user.find((item) => item.isOnline);
    const addMoneyHistory = {
      username: props.user.find(item => item.isOnline).username,
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      move: form.move,
      wallet: props.user.find(item => item.isOnline).wallet + Number(form.move),
      concept: "Deposit Monopoly",
    }
    const removeMoneyHistory = {
      username: props.user.find(item => item.isOnline).username,
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      move: "-" + form.move,
      wallet: props.user.find(item => item.isOnline).wallet - Number(form.move),
      concept: "Extract Monopoly",
    }
    if (event.target.name === "playerOneAdd") {
      props.addMoneyWallet(form.move)
      props.addHistory(addMoneyHistory)
    }
    if (event.target.name === "playerOneRemove") {
      props.removeMoneyWallet(form.move)
      props.addHistory(removeMoneyHistory)
    }
    document.getElementById("playerOneH4").innerHTML = userSelect.wallet;

  }

  return (
    <section className="section-monopoly text-center">
      <h4>How many players?</h4>
      <div>
        <button className="btn btn-success" onClick={handleClick} value="2">
          2
        </button>
        <button className="btn btn-success" onClick={handleClick} value="3">
          3
        </button>
        <button className="btn btn-success" onClick={handleClick} value="4">
          4
        </button>
      </div>
      <div className="row player-container">
        <div className="col-12 col-sm-6 player-menu">
          <h3>{props.user.find((item) => item.isOnline).username}</h3>
          <h4 id="playerOneH4" >{props.user.find((item) => item.isOnline).wallet}</h4>
          <div className="d-flex">
            <button onClick={handleClickToMoveWallet2} name={"playerOneRemove"} >-</button>
            <input onChange={handleChangeInput} id={"playerOneInputWallet"} type="number" defaultValue="0" />
            <button onClick={handleClickToMoveWallet2} name={"playerOneAdd"} >+</button>
          </div>
        </div>
        <Player id="playerTwo" />
        <Player id="playerThree" className="d-none" />
        <Player id="playerFour" className="d-none" />
      </div>
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
  addHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Monopoly);
