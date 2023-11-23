import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";

const Total = () => {
    const { total, setTotal, productos, historial, setHistorial, logeado } = useContext(Contexto);
    const navegacion = useNavigate();

    const irMasInfo = (producto) => {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i] === producto) {
                navegacion(`/MasInfo/${i}`, { replace: false });
                // Aquí activamos la función para añadir al historial
                añadirHistorial(producto);
            }
        }
    };

    const eliminar = (producto) => {
        setTotal(prevTotal => {
            let newTotal = prevTotal.filter(item => item !== producto);
            return newTotal;
        });
        producto.seleccionado = false;
    };

    const añadirHistorial = (producto) => {
        if (logeado.estado) {
            const elementoIndice = historial.findIndex(item => item === producto);

            if (elementoIndice !== -1) {
                const nuevoHistorial = [...historial];
                nuevoHistorial.splice(elementoIndice, 1);
                nuevoHistorial.unshift(producto);
                setHistorial(nuevoHistorial);
            } else {
                setHistorial([producto, ...historial]);
            }
        }
    };

    let precioTotal = 0;
    total.forEach(item => precioTotal += parseInt(item.precio));

return (
    <div className="pagina-contenedora-carro">
      {precioTotal === 0  && <h2>El carro está vacío.</h2>}
      {precioTotal > 0 && (
        <div className="cesta">
          <h2>CESTA</h2>
          {total.map((producto, index) => (
            <div className="contenedor-producto-carro" key={index} indice={index}>
              <div className="contenedor-imagen-carro">
                <img src={producto.fotos[0]} alt={producto.fotos[0]} onClick={() => irMasInfo(producto)}/>
              </div>
              <div className="contenedor-info-carro">
                <p className="carro-nombre-producto">{producto.nombre}</p>
                <p className="carro-precio-producto">{producto.precio}$</p>
                <button className="boton-retirar-carro" onClick={() => eliminar(producto)}>Retirar del carro</button>
                <button className="boton-masInfo-carro" onClick={() => irMasInfo(producto)}>Más información</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {precioTotal > 0 && (<div className="contenedor-compra">
        <span>
          <p>Subtotal ({total.length} productos):</p> <h3>{precioTotal}$</h3>
        </span>
        <button>Tramitar pedido</button>
      </div>)}
    </div>
  );
};

export default Total;
