import { useEffect, useState } from "react";

const Galeria=( {fotos} )=> {


    const [contador, setContador]=useState(0);
    const [prevContador, setPrevContador]=useState(fotos.length-1);
    const [postContador, setPostContador]=useState(contador+1);

    const mover=(e)=> {
        if (e.target.className==="derecha") {
            if (contador===0) {
                setContador(fotos.length-1);
            }
            else {
                setContador(contador-1);
                return contador;
        }

        }
        if (e.target.className==="izquierda") {
            if (contador===fotos.length-1) {
                setContador(0);
                return contador;
            }
            else {
                setContador(contador+1);
                console.log(fotos);
                return contador;
        }
        }
    }

    useEffect(()=> {
        if (contador===0) {
            setPrevContador(fotos.length-1)
        } else {
            setPrevContador(contador-1);
        }
    }, [contador, fotos.length]);

    useEffect(()=> {
        if (contador===fotos.length-1) {
            setPostContador(0)
        } else {
            setPostContador(contador+1);
        }
    }, [contador, fotos.length]);



    return (
        <div className="galeria">
        <div className="galeria-imagenes-container">
        <img  id="imagenlateral" className="imagenes" alt={fotos[prevContador].nombre} src={`../${fotos[prevContador]}`}/>
        <img id="imagenPrincipal" className="imagenes" alt={fotos[contador].nombre} src={`../${fotos[contador]}`} />
        <img  id="imagenlateral" className="imagenes" alt={fotos[postContador].nombre} src={`../${fotos[postContador]}`}/>
        </div>
        <button id="flechas" className="izquierda" onClick={e=> mover(e)}><i class="fa-solid fa-arrow-left"></i></button>
        <button id="flechas" className="derecha"onClick={e=> mover(e)}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    )
};

export default Galeria;