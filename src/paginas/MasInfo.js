import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate, useParams } from "react-router-dom";

const MasInfo=()=> {

    const navegacion=useNavigate();
    const {productos, setTotal, total}=useContext(Contexto);
    const parametro=useParams();
    const index=parametro.indice;
    const producto=productos[index];

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

    return (
        <>
        <img src={`../${producto.foto}`} alt={producto.foto}/>
        <h2>{producto.nombre}</h2>
        <p>{`${producto.precio}$`}</p>
        <div className={producto.seleccionado===true ? "seleccionado" : "no-seleccionado"}/>
        <button onClick={hacerAlgo} >{producto.seleccionado===true ? "Quitar del carro" : "Añadir al carro"}</button>
        {console.log(producto.foto)}
        </>
    )
}

export default MasInfo;
