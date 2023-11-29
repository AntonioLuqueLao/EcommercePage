import { Navigate } from "react-router-dom"
import Contexto from "../contexto/Contexto"
import { useContext } from "react"

const RutaPrivada=({children})=> {
    const {logeado}=useContext(Contexto)
        return (logeado.estado)
        ? children
        : <Navigate to="/" />
}

export default RutaPrivada;