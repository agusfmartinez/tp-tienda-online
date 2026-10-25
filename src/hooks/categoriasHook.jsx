import { useState, useEffect } from 'react';

export function useCategorias() {

    let [categorias, setCategorias] = useState(null)

    useEffect(() => {
        fetch('/categorias.json')
            .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener las categorias.");
            }
            return response.json();
            })
            .then(data => setCategorias(data))
            .catch((error) => {
            console.error(error);
        });
    //El array vacío al final hace que la petición se ejecute al montar el componente.
    },[]);

    return categorias;
}

export default useCategorias;