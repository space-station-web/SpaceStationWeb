import ModalUI from "./Modal.presenter";
import { ModalProps } from "./Modal.types";

function Modal({ children, isOpen }: ModalProps) {
  return isOpen ? <ModalUI children={children} /> : null;
}

export default Modal;
