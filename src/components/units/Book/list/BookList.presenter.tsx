import { useState } from "react";
import PaginationComponent from "../../../commons/pagination/Pagination";
import ModalComponent from "./BoodListModal";
import * as L from "./BookList.styles";
import type { IBookListProps } from "./BookList.types";

export default function BoardListUI(props: IBookListProps): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  // 한 줄로 표시할 내용의 길이를 정하는 함수
  const truncateContent = (
    intro: string | undefined,
    maxLength: number = 13,
  ): string => {
    // 내용이 falsy 값인 경우 (undefined, null, 빈 문자열 등), 빈 문자열을 반환합니다.
    if (!intro) return "";

    // 내용이 최대 길이보다 길면, 잘라내고 "..."를 추가합니다.
    return intro.length > maxLength ? intro.slice(0, maxLength) + "..." : intro;
  };

  return (
    <L.Wrapper>
      <L.TopDiv>
        <L.Prev src="/common/icon/Arrow 2.png" />
      </L.TopDiv>
      <L.CategoryDiv>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/1.png" />
          <L.CategoryName>소설</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/2.png" />
          <L.CategoryName>시</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/3.png" />
          <L.CategoryName>에세이</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/4.png" />
          <L.CategoryName>취미</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/5.png" />
          <L.CategoryName>문화</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/6.png" />
          <L.CategoryName>요리</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/7.png" />
          <L.CategoryName>사랑</L.CategoryName>
        </L.CategoryContainer>

        <L.CategoryContainer onClick={toggleModal}>
          <L.CategoryIcon src="./book/8.png" />
          <L.CategoryName>책 등록하기</L.CategoryName>
        </L.CategoryContainer>
      </L.CategoryDiv>

      <L.BoardBox>
        {props.books?.map((el) => (
          <L.Board
            key={el.book_id}
            id={`${el.book_id}`}
            onClick={props.onClickBook}
          >
            <L.BoardImage
              src={el.image_url ? el.image_url : "/book/rectangle 208.png"}
            />

            <L.BoardBottom>
              <L.BoardCategory>지연</L.BoardCategory>
              <L.BoardTitle>{truncateContent(el.title)}</L.BoardTitle>
              <L.BoardSubTitle>부제</L.BoardSubTitle>
              <L.BoardContents>{truncateContent(el.intro)}</L.BoardContents>
            </L.BoardBottom>
          </L.Board>
        ))}
      </L.BoardBox>

      <PaginationComponent
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        totalPageCount={props.totalPageCount}
      />
      {isModalVisible && <ModalComponent onClose={toggleModal} />}
    </L.Wrapper>
  );
}
