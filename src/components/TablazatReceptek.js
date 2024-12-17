import React, { useContext, useState } from "react"
import SorRecept from "./SorRecept";
import { ApiContext } from "../contexts/ApiContext";


function TablazatReceptek() {
  const { receptLista } = useContext(ApiContext);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Név</th>
            <th scope="col">Kép</th>
            <th scope="col">Leírás</th>
            <th scope="col">Kategória</th>
          </tr>
        </thead>
        <tbody>
          {receptLista.map((elem, key) => {
            return (
              <SorRecept elem={elem} key={key} />
            );
          })};
        </tbody>
      </table>
    </div>
  )
}
export default TablazatReceptek
