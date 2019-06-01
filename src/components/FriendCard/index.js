import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="img-container" onClick={() => props.clickhandler()}>
      <img src={props.image} alt={props.id} />
    </div>
  );
}

export default FriendCard;
