import Contexto from "../contexto/Contexto";
import { useContext } from "react";
import Recuadro from "../componentes/Recuadro";

const Resultados = () => {
    const { barra, resultadosEncontrados } = useContext(Contexto);

    return (
        <>
            {resultadosEncontrados ? (
                barra === null ? (
                    <h1>No se han encontrado resultados con esas palabras</h1>
                ) : (
                    barra.map((producto, index) => (
                        <Recuadro key={index} indice={index} datos={producto} />
                    ))
                )
            ) : (
                <h1>No se han encontrado resultados con esas palabras</h1>
            )}
        </>
    );
}

export default Resultados
