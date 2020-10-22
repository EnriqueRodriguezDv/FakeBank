import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addNewUser, addHistory } from "../../action/index";

const ModalNewClient = (props) => {
  const [form, setValues] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    check: false,
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    let isUserExits = false;
    const date = new Date();
    const dateComplete = {
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      username: form.username,
      move: 0,
      wallet: 0,
      concept: "New Count",
    };
    event.preventDefault();

    if (props.user.find((item) => item.username === form.username)) {
      isUserExits = true;
    }

    if (
      form.check &&
      form.password === form.repeatPassword &&
      form.password !== "" &&
      form.username !== "" &&
      isUserExits === false
    ) {
      props.addNewUser({
        username: form.username,
        password: form.password,
        wallet: 0,
        history: [],
        isOnline: true,
        isPlayerMonopoly: true
      });
      props.addHistory(dateComplete);
      $("#modalNewClient").modal("hide");
      props.history.push("/principal");
      document.getElementById("resetFormNewClient").reset();
      setValues({
        username: "",
        password: "",
        repeatPassword: "",
        check: false,
      });
    } else {
      if (form.username === "") {
        alert("You must put a username");
      }
      if (isUserExits) {
        alert("This name of user isn`t disposition");
      }
      if (form.username === props.user.map((item) => item.username))
        if (form.password === "") {
          alert("You must put a password");
        }
      if (form.password !== form.repeatPassword) {
        alert("The password are different");
      }
      if (!form.check) {
        alert("You must accept the term");
      }
    }
  };

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="modalNewClient"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Client
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="resetFormNewClient" onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group row justify-content-center align-items-center">
                  <p className="mr-2 ml-2 mb-0">Name</p>
                  <input
                    type="text"
                    className="form-control-sm"
                    name="username"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group row justify-content-center align-items-center">
                  <p className="mr-2 ml-2 mb-0">Password</p>
                  <input
                    type="password"
                    className="form-control-sm"
                    name="password"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group row justify-content-center align-items-center">
                  <p className="mr-2 ml-2 mb-0">Repeat Password</p>
                  <input
                    type="password"
                    className="form-control-sm"
                    name="repeatPassword"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group row justify-content-center align-items-center">
                  <input
                    type="checkbox"
                    className="form-control-sm"
                    name="check"
                    onClick={handleCheck}
                  />
                  <small className="mr-2 ml-2">
                    Accept that the data cannot be real
                  </small>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  addNewUser,
  addHistory,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalNewClient)
);
