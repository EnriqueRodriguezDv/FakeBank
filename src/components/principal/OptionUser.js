import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/optionUser.scss";

const OptionUser = ({ img, title, link }) => {
  return (
    <div className="col-lg-6 col-12 containerOptionUser">
      <div className="optionUser">
        <figure>
          <img src={img}></img>
        </figure>
        <Link to={`/${link}`}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default OptionUser;
