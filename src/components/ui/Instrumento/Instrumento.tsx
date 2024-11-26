
import { Card, CardBody, CardImg } from "react-bootstrap"
import { IInstrumento } from "../../../types/Instrumento"
import styles from "./Instrumento.module.css"


interface ICardInstrumento {
    instrumento: IInstrumento;
}

export const Instrumento = ({ instrumento }: ICardInstrumento) => {

    return (
        <Card className={styles.containerInstrumento} >
            <CardImg src={`src/assets/img/${instrumento.imagen}`} />
            <CardBody className={styles.containerInstrumentoBody}>
                <Card.Title className={styles.instrumentoTitle} >{instrumento.instrumento}</Card.Title>
                <Card.Text>
                    <div className={styles.instrumentoPrice}>
                        {
                            parseFloat(instrumento.precio) > 0
                                ? (<p><b>$ {instrumento.precio}</b></p>)
                                : (<p><b>Gratis</b></p>)
                        }
                        
                    </div>
                    <div>
                        {
                            instrumento.costoEnvio === 'G' 
                                ? (<div className={styles.instrumentoEnvioGratis}><img src="/src/assets/img/camion.png"/><p>Envío gratis a todo el país</p></div>) 
                                : (<div className={styles.instrumentoEnvio}><p>Costo de Envío Interior de Argentina: ${instrumento.costoEnvio}</p></div>)
                        }
                    </div>
                    <div>
                        {
                            parseInt(instrumento.cantidadVendida) > 0
                                ? (<p>{instrumento.cantidadVendida} vendidos</p>)
                                : (<p>Sin artículos vendidos</p>)
                        }
                    </div>
                    
                    
                </Card.Text>
            </CardBody>
        </Card>
    )
}
