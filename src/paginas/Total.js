import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";

const Total=()=> {

    const {total, setTotal, productos}=useContext(Contexto);
    const navegacion=useNavigate()

    /* BOTÓN MASINFO */
    const irMasInfo=(producto)=> {
        /* CAMBIAR ESTO PORQUE EL INDEX DEL TOTAL NO ES EL MISMO DEL ARRAY PRODUCTOS */
        for (let i = 0; i < productos.length; i++) {
            if (productos[i]===producto) {
            navegacion(`/MasInfo/${i}`, {replace: false});   
            }
        }
    }

    /* BOTÓN ELIMINAR */
    const eliminar=(producto)=> {
        setTotal(prevTotal=> {
            let newTotal=prevTotal.filter(item => item !== producto);
            return newTotal;
        })
        producto.seleccionado=false;
    }
    /* TOTAL */
    let precioTotal=0;
    total.map(item=> precioTotal+=item.precio);


    return (
        <div>
           {total.map( (producto, index)=> <div key={index} indice={index}>Producto: {producto.nombre} Precio: {producto.precio}$ <button onClick={()=> eliminar(producto)}>Retirar del carro</button> <button onClick={()=> irMasInfo(producto)}>Más información</button> </div>)}
           Total: {precioTotal}$
        </div>
    )
}

export default Total;