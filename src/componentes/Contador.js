import { useContext } from "react";
import Contexto from "../contexto/Contexto";

const Contador=()=> {
    const {total}=useContext(Contexto);
    return (
        <div>
            {total.length}
        </div>
    )
}

export default Contador;