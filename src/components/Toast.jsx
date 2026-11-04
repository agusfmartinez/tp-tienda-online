import { Toast, ToastContainer } from 'react-bootstrap';

const ToastGeneral = ({ show, mensaje, onClose, titulo, tipo = 'success', delay=2500 }) => {
  return (
    <ToastContainer position="top-end" containerPosition="fixed" className="toast-carrito">
      <Toast show={show} onClose={onClose} delay={delay} autohide bg={tipo}>
        <Toast.Header closeButton>
          <strong className="me-auto">{titulo}</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{mensaje}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastGeneral;