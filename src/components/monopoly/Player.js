import React, { useState } from "react";
import { connect } from "react-redux";
import { addMonopolyPlayer, addRemoveMoneyMonopoly, addHistory } from "../../action"

const Player = (props) => {
  const date = new Date;
  const { className, id } = props;

  const [form, setValues] = useState({
    date: "",
    username: "",
    move: 0,
    wallet: "",
    concept: "",
    isToAdd: true
  })

  const handleChangeInput = (event) => {
    setValues({
      ...form,
      move: event.target.value,
    })
  }

  const handleClickToMoveWallet = (event) => {
    const userSelect = props.user.find((item) => item.username === form.username);
    const addMoneyHistory = {
      username: form.username,
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      move: form.move,
      wallet: props.user.find(item => item.username === form.username).wallet + Number(form.move),
      concept: "Deposit Monopoly",
    }
    const removeMoneyHistory = {
      username: form.username,
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      move: "-" + form.move,
      wallet: props.user.find(item => item.username === form.username).wallet - Number(form.move),
      concept: "Extract Monopoly",
    }
    if (event.target.name === id + "add") {
      form.isToAdd = true
      props.addRemoveMoneyMonopoly(form)
      props.addHistory(addMoneyHistory)
    }
    if (event.target.name === id + "remove") {
      form.isToAdd = false
      props.addRemoveMoneyMonopoly(form)
      props.addHistory(removeMoneyHistory)
    }
    document.getElementById(`${id + "h4"}`).innerHTML = userSelect.wallet;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectUser = document.getElementById(`${id + "select"}`).value;
    const userSelect = props.user.find((item) => item.username === selectUser);
    props.addMonopolyPlayer(selectUser)
    setValues({
      ...form,
      username: selectUser
    })
    document.getElementById(`${id + "h3"}`).innerHTML = userSelect.username;
    document.getElementById(`${id + "h4"}`).innerHTML = userSelect.wallet;
    document
      .getElementById(`${id + "containerMenu"}`)
      .classList.remove("d-none");
    document.getElementById(`${id + "select"}`).classList.add("d-none");
    document.getElementById(`${id + "button"}`).classList.add("d-none");
  };

  return (
    <div id={id} className={`col-12 col-sm-6 player-menu ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column"
      >
        <select name="" id={`${id + "select"}`}>
          {props.user.map((item, index) => {
            if (!item.isPlayerMonopoly) {
              return (
                <option key={index} value={item.username}>
                  {item.username}
                </option>
              );
            }
          })}
        </select>
        <button
          id={`${id + "button"}`}
          type="submit"
          className="btn btn-success mt-2"
        >
          To play!
      </button>
      </form>
      <div id={`${id + "containerMenu"}`} className="d-none">
        <h3 id={`${id + "h3"}`}>selected username</h3>
        <h4 id={`${id + "h4"}`}>selected wallet</h4>
        <div className="d-flex">
          <button onClick={handleClickToMoveWallet} name={id + "remove"} >-</button>
          <input onChange={handleChangeInput} id={id + "inputWallet"} type="number" defaultValue="0" />
          <button onClick={handleClickToMoveWallet} name={id + "add"} >+</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  addMonopolyPlayer,
  addRemoveMoneyMonopoly,
  addHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
