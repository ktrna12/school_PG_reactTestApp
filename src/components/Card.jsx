import React from "react";

const Card = ({ ava, name }) => {
  return (
    <div className="card">
      <img
        src={ava}
        alt={"picture"}
        style={{ width: "250px", borderRadius: "25px" }}
      />
      <p>{name}</p>
    </div>
  );
};
export default Card;
