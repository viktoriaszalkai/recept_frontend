import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";


function SorRecept(props) {
  const {receptLista, setReceptLista} = useContext(ApiContext)
  function valtozasKezeles(event) {
 
    const sv = { ...receptLista }
    sv[event.target.id] = event.target.value
    setReceptLista({ ...sv })
  }
  return (
    <tr onClick={valtozasKezeles}>
      <td scope="row" value={props} ></td>
      <td value={props} >{props.elem.nev}</td>
      <td><img src={props.elem.kep_eleresi_ut} alt={props.elem.nev} height="100"></img></td>
      <td value={props} >{props.elem.leiras}</td>
      <td value={props} >{props.elem.receptkategoria[0].nev}</td>
    </tr>
  );
}

export default SorRecept;
