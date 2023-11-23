import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate, useParams } from "react-router-dom";
import Galeria from "../componentes/Galeria";
import Carrusel from "../componentes/Carrusel";

const MasInfo=()=> {

    const navegacion=useNavigate();
    const {productos, setTotal, total, logeado, ventanitaPrecompra, setVentanaPrecompra, setIndiceVentana}=useContext(Contexto);
    const parametro=useParams();
    const index=parametro.indice;
    const producto=productos[index];

    const recomendados=productos.filter(item=> item.departamento===producto.departamento && item!==producto)

    const hacerAlgo=()=> {
        if (localStorage.getItem("estado")) {

            if (total.find(item=> item===producto)) {
                setTotal(prevTotal=> {
                    let newTotal=prevTotal.filter(item => item !== producto);
                    return newTotal;
                })
                producto.seleccionado=false;
                console.log("devolviendo");
                console.log(total);
            } else {
                producto.seleccionado=true;
                setTotal(prevTotal=> {
                    return [...prevTotal, producto]
                })
                console.log("comprando");
                console.log(total);
            }
        } else {
           navegacion('/Registro', {replace: false});
        }
    }

    const compraDirecta = () => {
        if (!ventanitaPrecompra) {
            setVentanaPrecompra(true);
            setIndiceVentana(index);
        }
    }

    return (
        <>
        <Galeria fotos={producto.fotos}/>
        <h2 className="masInfo-nombre">{producto.nombre}</h2>
        <p className="masInfo-texto">{producto.texto}</p>
        <p className="masInfo-precio">{`${producto.precio}$`}</p>
        <button className="boton-añadirCarro-masInfo" onClick={hacerAlgo} >{logeado.estado ? (producto.seleccionado===true ? "Quitar de la cesta" : "Añadir a la cesta") : "añadir a la cesta"}</button>
        <button className="boton-compra-masInfo" onClick={compraDirecta}>Comprar ya</button>
        <div>
        <h2 className="tambien-te-puede">También te puede interesar...</h2>
        <Carrusel sugerencias={recomendados} />
        </div>
        </>
    )
}

export default MasInfo;
