import React from "react";
import { useState } from "react";
import { Select } from "../style";


export default function Ordenado(props) {

  return (
    <Select>
    
      <select 
      value={props.parametro}
      onChange={ev=>{props.setParametro(ev.target.value)}}>
        <option value={"nenhum"}>Nenhum</option>
        <option value={"priceAsc"}>Crescente</option>
        <option value={"priceDesc"}>Decrescente</option>
        <option value={"alfabetica"}>De A à Z</option>
      </select>

    </Select>
  );
}