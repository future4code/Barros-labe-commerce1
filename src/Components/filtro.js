import React from "react";
import { useState } from "react";

export default function Filtro(props) {

  return (
    <div>
        <h2>{props.label}</h2>
      <input
        type={props.type}
        value={props.inputValue}
        onChange={props.captureInput}
      ></input>

    </div>
  );
}
