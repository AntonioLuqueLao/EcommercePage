import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Recuadro from "../componentes/Recuadro";

const Principal=()=> {

    const { productos, cantidadRenderizados, refObservador } = useContext(Contexto);

    return (
        <div className="pagina-contenedora">
        {productos.slice(0, cantidadRenderizados).map((producto, index) => <Recuadro key={index} indice={index} datos={producto}/>)}
        <div ref={refObservador} style={{ height: "10px" }} />
        </div>
    )
}

export default Principal;