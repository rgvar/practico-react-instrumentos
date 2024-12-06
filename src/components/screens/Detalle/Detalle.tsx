import { useEffect, useState } from "react";
import { IInstrumento } from "../../../types/Instrumento";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../data/instrumentos.json"
import styles from "./Detalle.module.css";
import Button from "react-bootstrap/Button";


export const Detalle = () => {

    const [item, setItem] = useState<IInstrumento | null>(null);

    const {id} = useParams();

    const getInstrumentoById = () => {
        const result = data.instrumentos.find( (i) => i.id === id);
        result ? setItem(result) : setItem(null);
    };

    useEffect(() => {
        getInstrumentoById();
    }, []);

    const navigate = useNavigate();
    const handleVolver = () => {
        navigate(-1);
    };
    

    return (
        <div>
            {   item &&
                <div className={styles.parentContainer}>
                    
                    <div className={styles.containerProducto}>
                        <div className={styles.topBarProducto}>
                            <button className={styles.buttonVolver} onClick={handleVolver}>Volver</button>
                        </div>
                        <div className={styles.botProducto}>
                            <div className={styles.containerProductoPrincipal}>
                                <div className={styles.productoImagen}>
                                    <img src={`/assets/img/${item.imagen}`} />
                                </div>
                                <div className={styles.productoDescripcion}>
                                    <div>Descripción: </div>
                                    <div>{item.descripcion}</div>
                                </div>
                            </div>
                            <div className={styles.containerProductoDetalle}>
                                <ul>
                                    <li>{item.cantidadVendida} vendidos</li>
                                    <li className={styles.productoTitle}><b>{item.instrumento}</b></li>
                                    <li className={styles.productoPrecio}>$ {item.precio}</li>
                                    <div>
                                        <li>Marca: {item.marca}</li>
                                        <li>Modelo: {item.modelo}</li>
                                    </div>
                                    <li>
                                        { item.costoEnvio == 'G' 
                                            ? <div className={styles.envioGratis}><img src={`/assets/img/camion.png`} /> Envío Gratis a todo el país</div>
                                            : <div className={styles.envioNormal}>Costo Envio: ${item.costoEnvio}</div>
                                        } 
                                    </li>
                                </ul>
                                <Button variant="outline-primary" onClick={() => {}} >Agregar al carrito</Button>

                            </div>
                        </div>
                    </div>
                </div>                      
            }
        </div>
    )
}
