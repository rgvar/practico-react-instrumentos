import { API_ENDPOINTS } from "../../../apiConfig";
import { IInstrumento } from "../../../types/IInstrumento";
import { ListInstrumentos } from "../../ui/ListInstrumentos/ListInstrumentos"
import { useEffect, useState } from "react";


export const Home = () => {

    const [data, setData] = useState<IInstrumento[]>([]);

    useEffect(() => {
        fetch(API_ENDPOINTS.instrumentos)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ListInstrumentos  items={data} message="Nada para mostrar" />
    )
}
