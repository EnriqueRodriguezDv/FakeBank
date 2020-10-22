import React from "react";

const SecondHeader = ({ img, title }) => {
  return (
    <figure>
      <img className="principalImg" src={img} alt="Cover" />
      <div className="container-title">
        <h2 className="title">{title}</h2>
      </div>
    </figure>
  );
};

export default SecondHeader;
