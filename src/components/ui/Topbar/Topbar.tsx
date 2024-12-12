import { Link } from "react-router-dom"
import styles from "./Topbar.module.css"

export const Topbar = () => {
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.navbar}>
                <div className={styles.navbarBrand}>INSTRUMENTOS</div>
                <ul className={styles.navbarLinks}>
                    <li><Link to='/home'>INICIO</Link></li>
                    <li><Link to='/categories'>CATEGORIAS</Link></li>
                    <li><Link to='/search'>BUSCAR</Link></li>
                    <li><Link to='/add'>AGREGAR</Link></li>
                </ul>
            </div>
        </div>
    )
}
