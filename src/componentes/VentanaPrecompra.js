import Contexto from "../contexto/Contexto";
import { useContext } from "react";

const VentanaPrecompra = () => {

    const {ventanitaPrecompra, setVentanaPrecompra, productos, indiceVentana}=useContext(Contexto);

    return (
        <div className={`${ventanitaPrecompra ? "ventana-precompra" : "ventana-precompra-hide"}`}>
            <div className="x-container">
                <button className="x" onClick={() => {setVentanaPrecompra(false)}}>X</button>
            </div>

            <div>
                <img src={productos[indiceVentana].fotos[0]} alt={productos[indiceVentana].fotos[0]}/>
                <h2>{productos[indiceVentana].nombre}</h2>
            </div>
            
            
        <div className="contenedor-compraVentana">
        <span>
          <p>Subtotal:</p> <h3>{productos[indiceVentana].precio}$</h3>
        </span>
        <button>Tramitar pedido</button>
      </div>

        </div>
    )
}

export default VentanaPrecompra;