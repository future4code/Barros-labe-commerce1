import React from "react";
import { useState } from "react";
import { Select } from "../style";


export default function Ordenado(props) {

  return (
    <Select>
    
      <select 
      value={props.parametro}
      onChange={ev=>{props.setParametro(ev.target.value)}}>
        <option value={"price"}>Crescente</option>
        <option value={"price"}>Decrescente</option>
      </select>

    </Select>
  );
}