import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screens/Home/Home"
import { Detalle } from "../components/screens/Detalle/Detalle"
import { Agregar } from "../components/screens/Agregar/Agregar"
import { Search } from "../components/screens/Search/Search"
import { Editar } from "../components/screens/Editar/Editar"


export const AppRouter = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detalle/:id" element={<Detalle />} />
                <Route path="/detalle/edit/:id" element={<Editar />} />
                <Route path="/add" element={<Agregar />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </>
    )

}