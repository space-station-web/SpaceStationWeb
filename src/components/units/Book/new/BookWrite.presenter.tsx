import { useState } from "react";
import * as B from "./BookWrite.styles";
import type { IBookWriteProps } from "./BookWrite.types";
import { InputModal } from "./InputModal";

// 목차 항목을 위한 타입 정의
interface TableContent {
  number: string;
  content: string;
}

export default function BookWriteUI(props: IBookWriteProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [tableContents, setTableContents] = useState<TableContent[]>([]);
  const categories = ["소설", "시", "에세이", "취미", "문화", "요리", "사랑"];

  const handleAddTableContent = (number: string, content: string): void => {
    setTableContents([...tableContents, { number, content }]);
  };

  // 항목 삭제 함수
  const handleRemoveTableContent = (indexToRemove: number): void => {
    setTableContents(
      tableContents.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <>
      <B.Wrapper>
        <B.Menu>
          <img
            src="/common/icon/Arrow 2.png"
            style={{ width: "1.73rem", height: "1.73rem" }}
          />
          <B.SubmitBtn>발행하기</B.SubmitBtn>
        </B.Menu>

        <B.TopContainer>
          <B.ImageContainer></B.ImageContainer>
          <B.BookIntroContainer>
            <B.BookTitleInput placeholder="책에 대한 제목을 입력해주세요." />
            <B.Text>책 소개</B.Text>
            <B.BookIntroInput placeholder="간단한 책 소개를 적어주세요." />
          </B.BookIntroContainer>
        </B.TopContainer>
        <B.CategoryContainer>
          <B.Text>카테고리</B.Text>
          <B.CategoryItemDiv>
            {categories.map((category) => (
              <B.CategoryBtn
                key={category}
                style={{
                  backgroundColor:
                    props.selectedCategory === category ? "#dcdcdc" : "#1e1e1e",
                  color:
                    props.selectedCategory === category ? "black" : "#dcdcdc",
                }}
                onClick={(): void => {
                  props.onClickCategory(category);
                }}
              >
                {category}
              </B.CategoryBtn>
            ))}
          </B.CategoryItemDiv>
        </B.CategoryContainer>
        <B.TableContainer>
          <B.Table>목차</B.Table>
          <B.TableContentsContainer>
            {tableContents.map((item, index) => (
              <B.TableDiv key={index}>
                <B.TableText>
                  {item.number}. {item.content}
                </B.TableText>

                <B.DeleteButton
                  onClick={() => {
                    handleRemoveTableContent(index);
                  }}
                >
                  x
                </B.DeleteButton>
              </B.TableDiv>
            ))}
          </B.TableContentsContainer>
          <B.AddTableContainer
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            <img src="/book/add.svg" />
            <B.Add>추가하기</B.Add>
          </B.AddTableContainer>
        </B.TableContainer>
        <B.ContentsContainer>
          <B.ContentsImageContainer></B.ContentsImageContainer>
          <B.BookContents placeholder="내용을 입력해주세요." />
        </B.ContentsContainer>
      </B.Wrapper>
      <InputModal
        isOpen={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
        onAdd={handleAddTableContent}
      />
    </>
  );
}
