import React from "react";

const FormPiece = ({ title, inputType, name, handleChange }) => {
  return (
    <div className="col-6 form">
      <h2>{title}</h2>
      <input type={inputType} name={name} onChange={handleChange} />
    </div>
  );
};

export default FormPiece;
