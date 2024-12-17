import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Kategoria() {
    const { receptLista } = useContext(ApiContext);

    function kiir(event){
        console.log('kiirok')
    }
    

    return (
        <div>
            <form >
                <div className="mb-3">

                    <label htmlFor="kategoria" className="form-label">Recept kategóriája</label>
                    <select className="drop-down" id="category" onClick={kiir} >
                        <option> </option>
                        {receptLista.map((elem, key) => {
                            return (<option value={elem} key={key}>{elem.receptkategoria[0].nev}</option>)
                        })};
                    </select>
                </div>
            </form>
        </div >

    );

}

export default Kategoria