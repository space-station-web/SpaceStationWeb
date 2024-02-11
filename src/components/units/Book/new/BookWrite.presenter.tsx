import * as B from "./BookWrite.styles";

export default function BookWriteUI(): JSX.Element {
  return (
    <>
      <B.Wrapper>
        <B.Menu>
          <img
            src="/common/icon/Arrow 2.png"
            style={{ width: "45px", height: "45px" }}
          />
          <B.SubmitBtn>발행하기</B.SubmitBtn>
        </B.Menu>

        <B.TopContainer>
          <B.ImageContainer></B.ImageContainer>
          <B.BookIntroContainer>
            <B.BookTitleInput />
            <B.Text>책 소개</B.Text>
            <B.BookIntroInput placeholder="간단한 책 소개를 적어주세요." />
          </B.BookIntroContainer>
        </B.TopContainer>
        <B.CategoryContainer>
          <B.Text>카테고리</B.Text>
          <B.CategoryItemDiv>
            <B.CategoryBtn>소설</B.CategoryBtn>
            <B.CategoryBtn>시</B.CategoryBtn>
            <B.CategoryBtn>에세이</B.CategoryBtn>
            <B.CategoryBtn>취미</B.CategoryBtn>
            <B.CategoryBtn>문화</B.CategoryBtn>
            <B.CategoryBtn>요리</B.CategoryBtn>
            <B.CategoryBtn>사랑</B.CategoryBtn>
          </B.CategoryItemDiv>
        </B.CategoryContainer>
        <B.ContentsContainer></B.ContentsContainer>
      </B.Wrapper>
    </>
  );
}
