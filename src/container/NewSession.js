import React from "react";

import SecondHeader from "../components/global/SecondHeader";

import "../assets/styles/components/cover.scss";

import imgHeadNewSession from "../assets/static/imgHeadNewSession.jpg";
import lionMoney from "../assets/static/lionMoney.jpg";
import lion from "../assets/static/lion.jpg";
import monopoly from "../assets/static/monopoly.jpg";
import imgFooterCover from "../assets/static/imgFooterCover.jpg";

const NewSession = () => {
  return (
    <section id="cover">
      <SecondHeader
        img={imgHeadNewSession}
        title={"Feel the tranquility that can give you a fake bank"}
      />
      <div className="container-fluid mt-5 lionMoney">
        <div className="row">
          <img className="col-6 rounded-pill" src={lionMoney}></img>
          <h2 className="col-6 d-flex justify-content-center align-items-center">
            Become a client and enter the money you want for free !!!
          </h2>
        </div>
      </div>
      <div className="container-fluid lion mt-5">
        <div className="row">
          <h2 className="col-6 d-flex justify-content-center flex-column align-items-center">
            <i>I am happier when I see the amount of fake money I have</i>
            <small> - Anonymous client </small>
          </h2>
          <img className="col-6 rounded-circle" src={lion}></img>
        </div>
      </div>
      <div className="container-fluid mt-5 monopoly">
        <div className="row">
          <img className="col-6 rounded-circle" src={monopoly}></img>
          <h2 className="col-6 d-flex justify-content-center align-items-center">
            Use it with your friends in Monopoly !!
          </h2>
        </div>
      </div>
      <figure className="footerCover mb-0">
        <img src={imgFooterCover}></img>
        <div className="buttonsGroup">
          <h2 className="mb-3">Become a client today!!</h2>
          <button
            type="button"
            data-toggle="modal"
            data-target="#modalNewClient"
            className="btn btn-warning mr-4"
          >
            New Client
          </button>
          <button
            type="button"
            data-toggle="modal"
            data-target="#modalClientArea"
            className="btn btn-warning"
          >
            Client´s Area
          </button>
        </div>
      </figure>
    </section>
  );
};

export default NewSession;
