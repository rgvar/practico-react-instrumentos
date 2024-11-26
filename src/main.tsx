import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/screens/Home/Home.tsx'
import { DetalleProducto } from './components/screens/DetalleProducto/DetalleProducto.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detalle" element={<DetalleProducto />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
