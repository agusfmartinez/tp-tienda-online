import { useState, useEffect } from 'react';

export function useProductos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/productos.json')
            .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los productos");
            }
            return response.json();
            })
            .then(data => setProductos(data))
            .catch((error) => {
            console.error(error);
        });
    //El array vacío al final hace que la petición se ejecute al montar el componente.
    },[]);

    return productos;
}

export default useProductos;