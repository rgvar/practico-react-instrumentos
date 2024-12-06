import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screens/Home/Home"
import { Detalle } from "../components/screens/Detalle/Detalle"


export const AppRouter = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detalle/:id" element={<Detalle />} />
            </Routes>
        </>
    )

}