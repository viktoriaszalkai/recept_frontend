
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
const [receptLista, setReceptLista] = useState([]);
  
  const getAdat = async (vegpont, callbackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      console.log("adat: ", response.data);
      callbackFv(response.data)
    } catch (err) {
      console.log("Hiba", err);
    } finally {
      
    }
  }; 
  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log("adat: ", response.data);
    
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor", err);
    } finally {
    }
  };


  useEffect(() => {
    getAdat("/api/receptkateg", setReceptLista);
  
  }, []);

  return (
    <ApiContext.Provider value={{ receptLista,setReceptLista, getAdat, postAdat}}>
      {children}
    </ApiContext.Provider>
  );
};