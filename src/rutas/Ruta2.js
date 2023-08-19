import { Routes, Route } from "react-router-dom"
import Total from "../paginas/Total"

const Ruta2=()=> {
    return (
        <>
        <Routes>
            <Route index element={<Total/>}/>
        </Routes>
        </>
    )
}

export default Ruta2;