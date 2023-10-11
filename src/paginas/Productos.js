import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Recuadro from "../componentes/Recuadro";
import { useParams } from "react-router-dom";

const Productos = () => {
    const { productos, cantidadRenderizados, refObservador } = useContext(Contexto);
    const {seccion}=useParams();
    const productosSeccion=productos.filter((producto=> seccion===producto.departamento))

    return (
        <div className="pagina-contenedora">
            {productosSeccion.slice(0, cantidadRenderizados).map((producto, indice) => (
                <Recuadro key={indice} indice={indice} datos={producto} />
            ))}
            <div ref={refObservador} style={{ height: "10px" }} />
        </div>
    );
};

export default Productos;
