import { useNavigate } from "react-router-dom";
import { IInstrumento } from "../../../types/Instrumento"
import styles from "./Instrumento.module.css"


interface ICardInstrumento {
    instrumento: IInstrumento;
}

export const Instrumento = ({ instrumento }: ICardInstrumento) => {

    const navigate = useNavigate();
    const handleNavigateDetalle = () => {
        navigate(`/detalle/${instrumento.id}`);
    }

    return (
        <div className={styles.containerInstrumento} onClick={handleNavigateDetalle}>
            <img className={styles.instrumentoImg} src={`assets/img/${instrumento.imagen}`} />
            <div className={styles.containerInstrumentoBody}>
                <div className={styles.instrumentoTitle} >{instrumento.instrumento}</div>
                <div>
                    <div className={styles.instrumentoPrice}>
                        {
                            parseFloat(instrumento.precio) > 0
                                ? (<p>$ {instrumento.precio}</p>)
                                : (<p>Gratis</p>)
                        }
                        
                    </div>
                    <div>
                        {
                            instrumento.costoEnvio === 'G' 
                                ? (<div className={styles.instrumentoEnvioGratis}><img src="assets/img/camion.png"/>Envío gratis a todo el país</div>) 
                                : (<div className={styles.instrumentoEnvio}><p>Costo de Envío Interior de Argentina: ${instrumento.costoEnvio}</p></div>)
                        }
                    </div>
                    <div className={styles.instrumentoCantidadVendida}>
                        {
                            parseInt(instrumento.cantidadVendida) > 0
                                ? (<p>{instrumento.cantidadVendida} vendidos</p>)
                                : (<p>Sin artículos vendidos</p>)
                        }
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
