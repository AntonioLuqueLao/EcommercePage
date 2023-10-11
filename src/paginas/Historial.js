import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import Recuadro from "../componentes/Recuadro";

const Historial=()=> {
    const { historial, setHistorial, cantidadRenderizados, refObservador }=useContext(Contexto);

    return (
        <div className="pagina-contenedora" id="pagina-contenedora-historial">
        {historial.slice(0, cantidadRenderizados).length===0 ? <h2>El historial está vacío.</h2>: historial.map((producto, index) => <Recuadro key={index} indice={index} datos={producto}/>)}
        {historial.slice(0, cantidadRenderizados).length>0 && <button className="boton-borrar-historial" onClick={()=> setHistorial([])}>Borrar historial</button>}
        <div ref={refObservador} style={{ height: "10px" }} />
        </div>
    )
}

export default Historial;