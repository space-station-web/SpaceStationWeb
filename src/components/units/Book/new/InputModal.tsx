import { useRef, useState } from "react";
import * as B from "./BookWrite.styles";

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (number: string, content: string, images: string[]) => void;
}
/* eslint-disable react/prop-types */

// 입력 모달 컴포넌트
export const InputModal: React.FC<InputModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [tableTitle, setTableTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFiles, setImageFiles] = useState<string[]>([]);

  if (!isOpen) return null;

  // 이미지 업로그
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        setImageFiles((prevImages) => [
          ...prevImages,
          e.target?.result as string,
        ]);
      };

      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  // 파입 입력 참조
  const handleFileInputClick = (): void => {
    fileInputRef.current?.click(); // 파일 입력 참조를 사용하여 클릭 이벤트를 프로그래매틱하게 발생시킵니다.
  };

  // 취소하기 버튼의 클릭 이벤트 핸들러
  const handleCancel = (): void => {
    // 상태를 초기화합니다.
    setTableTitle("");
    setContent("");
    setImageFiles([]);
    // props로 전달된 onClose 함수를 호출합니다.
    onClose();
  };

  return (
    <B.ModalBackground>
      <B.ModalContainer>
        <B.TitleInput
          type="text"
          placeholder="제목"
          value={tableTitle}
          onChange={(e) => {
            setTableTitle(e.target.value);
          }}
        />
        <B.InputImage
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
        />

        <B.ImageDiv>
          <B.InputImageRef
            src="/book/upload.png"
            onClick={handleFileInputClick}
          />
          {imageFiles.map((src, index) => (
            <B.InputImageRef key={index} src={src} style={{ marginLeft: 5 }} /> // 업로드된 이미지를 표시합니다.
          ))}
        </B.ImageDiv>
        <B.ContentsInput
          placeholder="내용"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <B.ButtonContainer>
          <B.TableAddBtn
            onClick={() => {
              onAdd(tableTitle, content, imageFiles);
              onClose();
            }}
          >
            추가하기
          </B.TableAddBtn>
          <B.TableAddBtn onClick={handleCancel}>취소하기</B.TableAddBtn>
        </B.ButtonContainer>
      </B.ModalContainer>
    </B.ModalBackground>
  );
};
