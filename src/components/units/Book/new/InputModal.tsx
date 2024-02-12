import { useState } from "react";
import * as B from "./BookWrite.styles";

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (number: string, content: string) => void;
}
/* eslint-disable react/prop-types */

// 입력 모달 컴포넌트 (간단한 예시)
export const InputModal: React.FC<InputModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [number, setNumber] = useState<string>("");
  const [content, setContent] = useState<string>("");

  if (!isOpen) return null;

  return (
    <B.ModalContainer>
      <B.NumberInput
        type="number"
        placeholder="번호"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <B.ContentsInput
        type="text"
        placeholder="내용"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <B.TableAddBtn
        onClick={() => {
          onAdd(number, content);
          onClose();
        }}
      >
        추가하기
      </B.TableAddBtn>
      <B.TableAddBtn onClick={onClose}>취소하기</B.TableAddBtn>
    </B.ModalContainer>
  );
};
