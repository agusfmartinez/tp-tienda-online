import { Toast, ToastContainer } from 'react-bootstrap';

const ToastCarrito = ({ show, mensaje, onClose, tipo = 'success' }) => {
  return (
    <ToastContainer position="top-end" containerPosition="fixed" className="toast-carrito">
      <Toast show={show} onClose={onClose} delay={2000} autohide bg={tipo}>
        <Toast.Header closeButton>
          <strong className="me-auto">Carrito</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{mensaje}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastCarrito;