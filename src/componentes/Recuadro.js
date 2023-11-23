import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Recuadro=( {datos, indice} )=> {

    const {total, setTotal, productos, historial, setHistorial, logeado, setVentanaPrecompra, ventanitaPrecompra, setIndiceVentana}=useContext(Contexto);

    const navegacion=useNavigate();

    const irMasInfo=()=> {
            for (let i = 0; i < productos.length; i++) {
                if (datos===productos[i]) {
                navegacion(`/MasInfo/${i}`, {replace: false});
                window.scroll(0, 0);   
                }
            }
            añadirHistorial();
        }

    const añadirHistorial = () => {
        if (logeado.estado) {
            const elementoIndice = historial.findIndex(item => item === productos[indice]);
    
            if (elementoIndice !== -1) {
                const nuevoHistorial = [...historial];
                nuevoHistorial.splice(elementoIndice, 1);
                nuevoHistorial.unshift(productos[indice]);
                setHistorial(nuevoHistorial);
            } else {
                setHistorial([productos[indice], ...historial]);
            }
        }
    };
    
    

    const botonCompra=()=> {
        if (localStorage.getItem("estado")) {

            if (total.find(item=> item===datos)) {
                setTotal(prevTotal=> {
                    let newTotal=prevTotal.filter(item => item !== datos);
                    return newTotal;
                })
                datos.seleccionado=false;
                console.log("devolviendo");
                console.log(total);
            } else {
                datos.seleccionado=true;
                setTotal(prevTotal=> {
                    return [...prevTotal, datos]
                })
                console.log("comprando");
                console.log(total);
            }
        } else {
           navegacion('/Registro', {replace: false});
        }
    }

    const compraDirecta = () => {

        if (logeado.estado && !ventanitaPrecompra) {
            setVentanaPrecompra(true);
            setIndiceVentana(indice);
        }
        else {
            navegacion('/Registro', {replace: false});
        }
    }

    return (

        <div className="recuadros">
        <div className="recuadro-imagen-contenedor" onClick={irMasInfo}>
        <img src={`${datos.fotos[0]}`} alt={`${datos.fotos[0]}`}/>
        </div>
        <div className="recuadro-texto">
        <div className="recuadro-info">
        <p className="recuadros-nombre" onClick={irMasInfo}>{datos.nombre}</p>
        <p className="recuadros-precio">{`${datos.precio}$`}</p>
        <p>Envío GRATIS</p>
        </div>
        <div className="recuadro-botones">
        <button className="boton-añadirCarro" onClick={botonCompra}>{logeado.estado ? (datos.seleccionado===true ? "Quitar de la cesta" : "Añadir a la cesta") : "añadir a la cesta"}</button>
        <button className="boton-compra" onClick={compraDirecta}>Comprar ya</button>
        </div>
        </div>
        </div>

    )
}

export default Recuadro;