import React from "react";

export default function MusicGroup(props) {
  return (
    <>
      <div>
        <h3>{props.name}</h3>
        <img src={props.img} alt="" />
        <p>{props.participants}</p>
      </div>
    </>
  );
}
