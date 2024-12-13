import { useState } from "react"
import { ListInstrumentos } from "../../ui/ListInstrumentos/ListInstrumentos"
import { IInstrumento } from "../../../types/IInstrumento"
import { API_ENDPOINTS } from "../../../apiConfig";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from './Search.module.css';

export const Search = () => {

    const [data, setData] = useState<IInstrumento[]>([]);
    const [searchData, setSearchData] = useState<String>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchData(value)

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (searchData === '') {
            await fetch(API_ENDPOINTS.instrumentos)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data: ', error));
            return;
        }

        await fetch(`${API_ENDPOINTS.search}/${searchData.toLowerCase()}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data: ', error));

    };



    return (
        <div className={styles.listSearchContainer}>
            <div>
                <Form
                    className={styles.formContainer}
                    onSubmit={handleSubmit}>
                    <InputGroup>
                        <InputGroup.Text>Ingrese su búsqueda: </InputGroup.Text>
                        <Form.Control onChange={handleChange} type="text" name="search" />
                        <Button variant="primary" type="submit" >Buscar</Button>
                    </InputGroup>
                </Form>


            </div>
            <ListInstrumentos items={data} message="Nada para mostrar" />
        </div>
    );
};
