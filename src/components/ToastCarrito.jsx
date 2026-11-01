import { Toast, ToastContainer } from 'react-bootstrap';

const ToastCarrito = ({ show, mensaje, onClose }) => {
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast show={show} onClose={onClose} delay={2000} autohide bg="success">
        <Toast.Header closeButton>
          <strong className="me-auto">Carrito</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{mensaje}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastCarrito;