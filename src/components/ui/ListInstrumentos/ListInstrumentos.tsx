import { IInstrumento } from "../../../types/Instrumento"
import { Instrumento } from "../Instrumento/Instrumento";
import styles from "./ListInstrumentos.module.css"

interface IListItems<T> {
    items: T[];
}

export const ListInstrumentos  = ({items}: IListItems<IInstrumento>) => {

    return (
        <div className={styles.containerInstrumentosList} >
            {
                items.map((item) => (
                    <Instrumento instrumento={item} />
                ))
            }
        </div>
    )
}
