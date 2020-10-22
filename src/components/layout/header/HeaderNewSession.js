import React from "react";

const HeaderNewSession = () => {
  return (
    <form className="form-inline ml-auto">
      <button
        data-toggle="modal"
        data-target="#modalNewClient"
        className="btn btn-md btn-outline-success mr-2"
        type="button"
      >
        New Client
      </button>
      <button
        data-toggle="modal"
        data-target="#modalClientArea"
        className="btn btn-md btn-success"
        type="button"
      >
        Client´s Area
      </button>
    </form>
  );
};

export default HeaderNewSession;
