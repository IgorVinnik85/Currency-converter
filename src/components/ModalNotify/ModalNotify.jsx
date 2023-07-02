import css from './ModalNotify.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const ModalNotify = ({ error, success }) => {
  return createPortal(
    <div className={css.modal}>
      {error}
      {success}
    </div>,
    modalRoot
  );
};

export default ModalNotify;
