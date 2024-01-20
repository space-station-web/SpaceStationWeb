import * as L from "./BookPreview.styles";

export default function BookPreviewUI(): JSX.Element {
  return (
    <div>
      <L.Wrapper>

        <L.TopDiv>
          <L.Prev src="/common/icon/Arrow 2.png" />
        </L.TopDiv>

        <L.PreviewContainer>
          <L.PreviewTop>
            <L.PreviewImage />
            <L.PreviewContentsContainer>
              <L.Title>크리스마스 준비</L.Title>
              <L.Author>By.가나다라</L.Author>
              <L.Table>목차</L.Table>

              <L.ButtonContainer>
                {/* save Button */}
                <L.ReadBtn>읽기</L.ReadBtn>
                <L.ShareBtn>인용하기</L.ShareBtn>
              </L.ButtonContainer>
            </L.PreviewContentsContainer>
          </L.PreviewTop>
        </L.PreviewContainer>
      </L.Wrapper>
    </div>
  );
}
