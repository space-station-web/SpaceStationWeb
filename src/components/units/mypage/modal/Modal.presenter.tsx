import * as styled from "./Modal.styles";
import { ModalUIProps } from "./Modal.types";

function ModalUI({ children }: ModalUIProps) {
  return <styled.Background>{children}</styled.Background>;
}

export default ModalUI;
