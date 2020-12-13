import React from "react";
import MusicGroup from "./MusicGroup";

export default function MusicGroupList(props) {
  return (
    <div>
      {props.data.map(item => (
        <MusicGroup {...item} />
      ))}
    </div>
  );
}
