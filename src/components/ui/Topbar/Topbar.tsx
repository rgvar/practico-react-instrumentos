import { Link } from "react-router-dom"
import styles from "./Topbar.module.css"

export const Topbar = () => {
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.navbar}>
                <div className={styles.navbarBrand}>MERCADO INSTRUMENTOS</div>
                <ul className={styles.navbarLinks}>
                    <li><Link to='/home'>INICIO</Link></li>
                    <li><Link to='/categories'>CATEGORIAS</Link></li>
                    <li><Link to='/search'>BUSQUEDA</Link></li>
                    <li><Link to='/add'>AGREGAR</Link></li>
                </ul>
            </div>
        </div>
    )
}
