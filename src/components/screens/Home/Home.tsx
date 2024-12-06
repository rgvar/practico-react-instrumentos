import { ListInstrumentos } from "../../ui/ListInstrumentos/ListInstrumentos"
import { useEffect, useState } from "react";


export const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/instrumentos')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ListInstrumentos  items={data} />
    )
}
