import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addHistory, openSession, addMonopolyPlayer } from "../../action/index";

const ModalClientArea = (props) => {
  const date = new Date();

  const [enterUser, setEnterUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    setEnterUser({
      ...enterUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickEnter = () => {
    const history = {
      date: `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      username: enterUser.username,
      move: 0,
      wallet: props.user.find((item) => item.username === enterUser.username)
        .wallet,
      concept: "Connect",
    };
    if (props.user.find((item) => item.username === enterUser.username)) {
      props.addHistory(history);
      props.openSession(enterUser.username);
      props.addMonopolyPlayer(enterUser.username);
      $("#modalClientArea").modal("hide");
      document.getElementById("resetFormClientArea").reset();
      props.history.push("/principal");

      setEnterUser({
        username: "",
        password: "",
      });
    } else {
      alert("Something wrong");
    }
  };

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="modalClientArea"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Client´s Area
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
            <div className="modal-body">
              <form id="resetFormClientArea" action="">
                <div className="form-group row justify-content-center align-items-center">
                  <p className="mr-2 ml-2 mb-0">Name</p>
                  <input
                    id="clientAreaInputName"
                    type="text"
                    className="form-control-sm"
                    name="username"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group row justify-content-center align-items-center">
                  <p className="mr-2 ml-2 mb-0">Password</p>
                  <input
                    id="clientAreaInputPassword"
                    type="password"
                    className="form-control-sm"
                    name="password"
                    onChange={handleInput}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClickEnter}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  addHistory,
  openSession,
  addMonopolyPlayer
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalClientArea)
);
