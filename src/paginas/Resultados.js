import Contexto from "../contexto/Contexto";
import { useContext } from "react";
import Recuadro from "../componentes/Recuadro";

const Resultados = () => {
    const { barra, resultadosEncontrados, cantidadRenderizados, refObservador } = useContext(Contexto);

    return (
        <div className="pagina-contenedora">
            {resultadosEncontrados ? (
                barra === null ? (
                    <h1>No se han encontrado resultados con esas palabras</h1>
                ) : (
                    barra.slice(0, cantidadRenderizados).map((producto, index) => (
                        <Recuadro key={index} indice={index} datos={producto} />
                    ))
                    
                )
            ) : (
                <h1>No se han encontrado resultados con esas palabras</h1>
            )}
             <div ref={refObservador} style={{ height: "10px" }} />
        </div>
    );
}

export default Resultados
