import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Recuadro from "../componentes/Recuadro";

const Principal=()=> {

    const {productos} = useContext(Contexto);

    return (
        <>
        {productos.map((producto, index) => <Recuadro key={index} indice={index} datos={producto}/>)}
        </>
    )
}

export default Principal;