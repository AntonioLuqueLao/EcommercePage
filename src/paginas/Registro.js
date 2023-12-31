import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";

const Registro=()=> {

    const navegacion=useNavigate();
    const {setState, state, logearme}=useContext(Contexto);

    const logearse=(e)=> {
        e.preventDefault();

        if(state.trim()!=="" && state.trim().length<10) {
        logearme();
        navegacion("/Principal", {replace: true});
    }
    else {
        console.log("Usuario incorrecto");
    }
    }

    const manejarInput=(e)=> {
        e.preventDefault();
        setState(e.target.value);
        console.log(state);
    }
    return (
        <>
        <div className="pagina-contenedora" id="pagina-contenedora-registro">
           <form onSubmit={e=> logearse(e)} className="login-form">
            <input type="text" onChange={e=> manejarInput(e)} value={state} placeholder="Introduce tu nombre o un apodo menor a 10 caracteres." className="input-registro"/>
            <input type="submit" value="Login" className="login-button"/>
           </form>
        </div>
        </>
    )
}

export default Registro;