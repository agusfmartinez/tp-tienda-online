import { Toast, ToastContainer } from 'react-bootstrap';

const ToastCarrito = ({ show, mensaje, onClose, titulo, tipo = 'succes' }) => {
  return (
    <ToastContainer position="top-end" containerPosition="fixed" className="toast-carrito">
      <Toast show={show} onClose={onClose} delay={2000} autohide bg={tipo}>
        <Toast.Header closeButton>
          <strong className="me-auto">{titulo}</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{mensaje}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastCarrito;