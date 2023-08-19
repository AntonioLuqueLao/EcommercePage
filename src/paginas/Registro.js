import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";

const Registro=()=> {

    const navegacion=useNavigate();
    const {setState, state, logearme}=useContext(Contexto);

    const logearse=(e)=> {
        e.preventDefault();
        if(state==="Antonio") {
        logearme();
        navegacion("/", {replace: true});
        setState("");
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
        <div>
           <form onSubmit={e=> logearse(e)}>
            <input type="text" onChange={e=> manejarInput(e)} value={state}/>
            <input type="submit" value="Login" />
           </form>
        </div>
        </>
    )
}

export default Registro;