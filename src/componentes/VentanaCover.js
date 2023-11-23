import Contexto from "../contexto/Contexto";
import { useContext } from "react";

const VentanaCover = () => {
    const {ventanitaPrecompra, setVentanaPrecompra}=useContext(Contexto);

    const cerrarVentana=()=> {
        setVentanaPrecompra(false);
    }

    const estilos = {
        zIndex: 7,
        width: "100%",
        position: "fixed",
        top: "0",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: ventanitaPrecompra ? "block" : "none"
      };

    return <div style={estilos} onClick={cerrarVentana}/>
}

export default VentanaCover;