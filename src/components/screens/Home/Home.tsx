import { IInstrumento } from "../../../types/Instrumento"
import { ListInstrumentos } from "../../ui/ListInstrumentos/ListInstrumentos"
import instrumentosData from "../../../data/instrumentos.json"


export const Home = () => {

    const items : IInstrumento[] = instrumentosData.instrumentos as IInstrumento[];

    return (
        <ListInstrumentos  items={items} />
    )
}
