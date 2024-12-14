import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "../../../apiConfig";
import { useEffect, useState } from "react";
import { IInstrumento } from "../../../types/IInstrumento";
import { FormEditarInstrumento } from "../../ui/FormEditarInstrumento/FormEditarInstrumento";

export const Editar = () => {

    const [item, setItem] = useState<IInstrumento>();
    const { id } = useParams();

    const getInstrumentoById = () => {
        try {
            fetch(`${API_ENDPOINTS.instrumentos}/${id}`)
                .then(response => response.json())
                .then(data => setItem(data));
        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        getInstrumentoById();
    }, []);

    if (!item) {
        return <p>Cargando ...</p>
    }

    return (
        <>
            <FormEditarInstrumento instrumento={item} />
        </>
    )
}
