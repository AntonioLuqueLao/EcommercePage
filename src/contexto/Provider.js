import { useReducer, useState } from "react";
import Contexto from "./Contexto";
import Reducer from "./Reducer";
import ACTIONS from "./Actions";

const productos=[
    {
        nombre: "Zapatillas 1",
        foto: "imagenes/61364+h3gML._AC_UY580_.jpg",
        precio: 123,
        seleccionado: false
    },
    {
        nombre: "Zapatillas 2",
        foto: "imagenes/102932-hombre-nike-blanco.jpg",
        precio: 645,
        seleccionado: false
    },
    {
        nombre: "Zapatillas 3",
        foto: "imagenes/zapatillas-deportivas-hombre-anchas-stability-fly-3.webp",
        precio: 927,
        seleccionado: false
    },

]

const Provider=({children})=> {

    const [resultadosEncontrados, setResultadosEncontrados]=useState(true);
    const [state, setState]=useState("");
    const [total, setTotal]=useState([]);
    const [barra, setBarra]=useState([]);
    const [inputValue, setInputValue]=useState("");


    const init=()=> {
        const valor=localStorage.getItem("estado");

        return {
            estado: !!valor
        }
    }

    const logearme=()=> {
        const action = {
            type:ACTIONS.log
        }
        dispatch(action);
        localStorage.setItem("estado", true);
    }
    const deslogearme=()=> {
        const action = {
            type:ACTIONS.unlog
        }
        dispatch(action);
        localStorage.removeItem("estado");
    }

    const [logeado, dispatch]=useReducer(Reducer, {}, init)

    return (
        <Contexto.Provider value={{state, setState, logearme, deslogearme, logeado, productos, total, setTotal, barra, setBarra, inputValue, setInputValue, resultadosEncontrados, setResultadosEncontrados}}>
        {children}
        </Contexto.Provider>
    )
}

export default Provider