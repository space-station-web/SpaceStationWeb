import * as L from "./BookWrite.styles";
import type { IBookWriteProps } from "./BookWrite.types";

export default function BookWriteUI(props: IBookWriteProps): JSX.Element {
  return (
    <>
      <L.Wrapper>
        <L.TopDiv>
          <L.Button>뒤로가기</L.Button>
          <L.Button>다음</L.Button>
        </L.TopDiv>

        <L.BookContainer>
          <L.TitleContainer>
            <L.TitleInput placeholder="책에 대한 제목을 정해주세요." />
            <L.DividingLine></L.DividingLine>
          </L.TitleContainer>

          <L.ImageContainer>
            <L.ImageBox onClick={props.onClickImage}>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={props.onChangeFile}
                ref={props.fileRef}
              />
              <L.UploadIcon src="/book/upload.png" />
              <L.TextBox>커버사진 추가하기</L.TextBox>
            </L.ImageBox>
            <img src={`https://storage.googleapis.com/${props.imageUrl}`} />
          </L.ImageContainer>

          <L.Contents></L.Contents>
        </L.BookContainer>
      </L.Wrapper>
    </>
  );
}
