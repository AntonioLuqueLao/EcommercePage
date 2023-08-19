import Contexto from "../contexto/Contexto";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const BarraBusqueda=()=> {

    const {productos, setBarra}=useContext(Contexto);
    const {inputValue, setInputValue, setResultadosEncontrados, resultadosEncontrados}=useContext(Contexto);
    const navegacion=useNavigate();

    const enviarInfo=(e)=> {
        e.preventDefault();
        console.log(resultadosEncontrados);
        navegacion("/Resultados",{replace: false})
    }

    const manejarInput=(e)=> {
        let productosArray=[];
        let inputValueMinuscula=e.target.value.toLowerCase();
        setInputValue(e.target.value);
        for (let i = 0; i < productos.length; i++) {
            let nombreProductMinus=productos[i].nombre.toLowerCase();
            if (nombreProductMinus.includes(inputValueMinuscula)) {
                productosArray.push(productos[i]);
            }
            setBarra(productosArray);
            setResultadosEncontrados(productosArray.length > 0)
        }
    }


    return (
        <>
        <form onSubmit={e=>enviarInfo(e)}>
        <input type="text" onChange={e=> manejarInput(e)} value={inputValue}/>
        <input type="submit" />
        </form>
        </>
    )
}

export default BarraBusqueda;