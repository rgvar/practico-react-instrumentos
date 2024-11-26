import { useEffect, useState } from "react";
import styles from "./DetalleProducto.module.css"
import { IInstrumento } from "../../../types/Instrumento";

export const DetalleProducto = () => {

    const [item, setItem] = useState<IInstrumento | null>(null);

    useEffect(() => {
      
    
      
    }, [])
    

    return (
        <>
            {   item &&
                <div className={styles.containerDetalleProducto}>
                    <div className={styles.containerDetalleIzq}>
                        <div><img /></div>
                        <div>{item.descripcion}</div>
                    </div>
                    <div className={styles.containerDetalleDer}>

                    </div>
                </div>
            }
        </>
    )
}
