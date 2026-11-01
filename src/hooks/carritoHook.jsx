import { useState } from 'react';

export function useCarrito() {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito") || "[]");
  });

  const [toast, setToast] = useState(null); 

  function actualizarCarrito(nuevoCarrito) {
    setCarrito(nuevoCarrito);
    // Usamos el localStorage para mantenter persistido el carrito
    // y debemos pasarlo a string porque localStorage solo acepta texto
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  function aumentarCantidad(id) {
    const producto = carrito.find((item) => item.id === id);
    if (!producto || producto.cantidad >= producto.stock) {
      return;
    }

    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );

    actualizarCarrito(nuevoCarrito);
  };

  function disminuirCantidad(id) {
    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    ).filter((item) =>
      item.cantidad > 0);

    actualizarCarrito(nuevoCarrito);
  };

  function eliminarProducto(id) {
    const nuevoCarrito = carrito.filter((item) =>
      item.id !== id
    );

    actualizarCarrito(nuevoCarrito);
  };

  function agregarAlCarrito(producto) {
    const existente = carrito.find(
      (item) => item.id === producto.id
    );

    const cantidadActual = existente
      ? existente.cantidad
      : 0;

    if (cantidadActual >= producto.stock) {
      setToast({ mensaje: 'No hay más stock disponible.', tipo: 'danger' });
      return 
    }

    let nuevoCarrito;

    if (existente) {
      nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [
        ...carrito,
        { ...producto, cantidad: 1 }
      ];
    }
    actualizarCarrito(nuevoCarrito);
    setToast({ mensaje: `¡${producto.nombre} se agregó al carrito!`, tipo: 'success' })
  };

   function vaciarCarrito() {
    actualizarCarrito([]);
  }

  function cerrarToast() {
    setToast(null)
  };

  const total = carrito.reduce((suma, item) =>
    suma + item.precio * item.cantidad, 0
  );

  const cantidadTotal = carrito.reduce((suma, item) =>
    suma + item.cantidad, 0
  );

return {
  carrito,
  agregarAlCarrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
  vaciarCarrito,
  total,
  cantidadTotal,
  toast,
  cerrarToast
};
}

export default useCarrito;