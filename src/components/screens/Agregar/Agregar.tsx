import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Agregar.module.css'
import { useState } from 'react';
import { IInstrumento } from '../../../types/IInstrumento';



export const Agregar = () => {

    const [formData, setFormData] = useState<IInstrumento>({
        instrumento: '',
        marca: '',
        modelo: '',
        imagen: '',
        precio: '',
        costoEnvio: '',
        cantidadVendida: '0',
        descripcion: '',
        categoria: {
            id: 0,
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.descripcion.length > 500) {
            alert("La descripción no puede exceder los 500 caracteres. ");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/instrumentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    categoria: {
                        id: formData.categoria,
                    }
                }),
            });

            if (response.ok) {
                alert('Instrumento agregado con éxito. ');
            } else {
                alert('Error al agregar el instrumento. ');
                console.log('Error', response.statusText);
            }
        } catch (error) {
            console.error('Error en la petición: ', error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <Form className={styles.formBase} onSubmit={handleSubmit}>
                <Form.Group className={styles.formTitle}>
                    <Form.Text>Agregar Instrumento</Form.Text>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formInstrumento">
                    <Form.Label>Instrumento</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese nombre del instrumento"
                        onChange={handleChange}
                        name="instrumento"
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formMarca">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese la marca"
                        onChange={handleChange}
                        name="marca"    
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formModelo">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese el modelo"
                        onChange={handleChange}
                        name="modelo"    
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese la url de la imagen"
                        onChange={handleChange}
                        name="imagen"    
                    />
                    <Form.Text className="text-muted">
                        Ejemplo: guitarra.jpg
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Ingrese el precio"
                        onChange={handleChange}
                        name="precio"    
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formCostoEnvio">
                    <Form.Label>Costo de Envío</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Ingrese el costo del envío"
                        onChange={handleChange}
                        name="costoEnvio"    
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Agregue una descripción del instrumento"
                        style={{resize: 'none'}}
                        onChange={handleChange}
                        name="descripcion"
                    />
                    <Form.Text className="text-muted">Máximo 500 caracteres</Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select
                        name="categoria"
                        value={formData.categoria.id}
                        onChange={handleChange}
                    >
                        <option value="1">Cuerda</option>
                        <option value="2">Viento</option>
                        <option value="3">Percusión</option>
                        <option value="4">Teclado</option>
                        <option value="5">Electrónico</option>
                        <option value="0">Otro</option>
                    </Form.Select>
                </Form.Group>

                <Button className="mt-2" variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    );
}