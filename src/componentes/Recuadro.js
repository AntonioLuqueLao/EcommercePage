import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Recuadro=( {datos, indice} )=> {

    const {total, setTotal, productos}=useContext(Contexto);

    const navegacion=useNavigate();

    const irMasInfo=()=> {
            /* CAMBIAR ESTO PORQUE EL INDEX DEL TOTAL NO ES EL MISMO DEL ARRAY PRODUCTOS */
            for (let i = 0; i < productos.length; i++) {
                if (datos===productos[i]) {
                navegacion(`/MasInfo/${i}`, {replace: false});   
                }
            }
        }

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

    return (

        <div className="recuadros">
        <img src={`${datos.foto}`} alt={datos.foto}/>
        <h2>{datos.nombre}</h2>
        <p>{`${datos.precio}$`}</p>
        <div className={datos.seleccionado===true ? ".seleccionado" : "no-seleccionado"}/>
        <button onClick={botonCompra}>{datos.seleccionado===true ? "Quitar del carro" : "Añadir al carro"}</button>
        <button onClick={irMasInfo}>Más información</button>
        </div>

    )
}

export default Recuadro;