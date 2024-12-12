import { IInstrumento } from "../../../types/IInstrumento"
import { Instrumento } from "../Instrumento/Instrumento";
import styles from "./ListInstrumentos.module.css"

interface IListItems<T> {
    items: T[];
}

export const ListInstrumentos  = ({items}: IListItems<IInstrumento>) => {

    return (
        <div className={styles.containerInstrumentosList} >
            {
                items.length > 0 ? (
                    items.map((item, index) => (
                        <Instrumento key={index} instrumento={item} />
                    ))
                ) : (
                    <div>No hay artículos para mostrar</div>
                )
            }
        </div>
    )
}
