import { useRouter } from "next/router";
import { useRef, useState } from "react";
import * as B from "./BookWrite.styles";
import type { IBookWriteProps } from "./BookWrite.types";
import { InputModal } from "./InputModal";

// 목차 항목을 위한 타입 정의

export default function BookWriteUI(props: IBookWriteProps): JSX.Element {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [coverImageUrl, setCoverImageUrl] = useState("/book/coverAdd.png"); // 커버 이미지 URL 상태

  const coverImageRef = useRef<HTMLInputElement>(null);

  const categories = ["소설", "시", "에세이", "취미", "문화", "요리", "사랑"];

  // 파일 입력 핸들러
  const handleCoverImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files?.[0]; // Optional chaining과 배열 접근을 결합

    if (file !== undefined && file !== null) {
      // 명시적으로 파일의 존재 여부를 확인
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const result = e.target?.result; // Optional chaining 사용
        if (typeof result === "string") {
          setCoverImageUrl(result); // 커버 이미지 URL을 업로드된 이미지로 업데이트
        }
      };

      fileReader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = (): void => {
    coverImageRef.current?.click(); // 파일 입력 참조를 사용하여 클릭 이벤트를 프로그래매틱하게 발생시킵니다.
  };

  return (
    <>
      <B.Wrapper>
        <B.Menu>
          <img
            src="/common/icon/Arrow 2.png"
            style={{ width: "1.73rem", height: "1.73rem", cursor: "pointer" }}
            onClick={() => {
              void router.push("/book");
            }}
          />
          <B.SubmitBtn onClick={props.onClickSubmitBook}>발행하기</B.SubmitBtn>
        </B.Menu>

        <B.TopContainer>
          <B.ImageContainer
            src={coverImageUrl}
            onClick={handleFileInputClick}
          />
          <input
            type="file"
            style={{ display: "none" }}
            ref={coverImageRef}
            accept="image/*" // 이미지 파일만 선택 가능
            onChange={handleCoverImageChange} // 변경 핸들러 추가
          />
          <B.BookIntroContainer>
            <B.BookTitleInput
              placeholder="책에 대한 제목을 입력해주세요."
              onChange={props.onChangeTitle}
            />
            <B.Text>책 소개</B.Text>
            <B.BookIntroInput
              placeholder="간단한 책 소개를 적어주세요."
              onChange={props.onChangeIntro}
            />
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
            {props.tableContents.map((item, index) => (
              <B.TableDiv key={index}>
                <B.TableText>
                  {index + 1}. {item.title}
                </B.TableText>

                <B.DeleteButton
                  onClick={() => {
                    props.handleRemoveTableContent(index);
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
          <B.ContentsImageContainer>
            {props.tableContents.map(
              (item, index) =>
                item.images?.map(
                  (
                    imageSrc,
                    imgIndex, // `?.` 연산자를 사용하여 `images`가 있는 경우에만 `map` 함수를 호출
                  ) => (
                    <img
                      key={`${index}-${imgIndex}`}
                      src={imageSrc}
                      style={{
                        marginRight: 10,
                        height: "10.9rem",
                        border: "1px solid #9c9c9c",
                        borderRadius: "10px",
                      }}
                      alt={`content-img-${index}-${imgIndex}`}
                    />
                  ),
                ),
            )}
          </B.ContentsImageContainer>

          <B.BookContents>
            {props.tableContents.map((item, index) => (
              <div key={index} style={{ marginRight: "5px" }}>
                <B.ContentTableTitle>
                  {index + 1}.{item.title}
                </B.ContentTableTitle>
                <B.ContentTableContents>{item.content}</B.ContentTableContents>
              </div>
            ))}
          </B.BookContents>
        </B.ContentsContainer>
      </B.Wrapper>
      <InputModal
        isOpen={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
        onAdd={props.handleAddTableContent}
      />
    </>
  );
}
