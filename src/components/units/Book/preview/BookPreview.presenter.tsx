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
            <L.PreviewImage src="/book/example.png" />
            <L.PreviewContentsContainer>
              <L.Title>크리스마스 준비</L.Title>
              <L.Author>By.가나다라</L.Author>
              <L.Table>목차</L.Table>

              <L.PreviewBottomDiv>
                <L.ScrollContent>123</L.ScrollContent>
                <L.ButtonContainer>
                  <L.Save />
                  <L.Button>읽기</L.Button>
                  <L.Button>인용하기</L.Button>
                </L.ButtonContainer>
              </L.PreviewBottomDiv>
            </L.PreviewContentsContainer>
          </L.PreviewTop>

          <L.PreviewMiddle>
            <L.SubTitle>책 소개</L.SubTitle>
            <L.IntroduceArea>
              겨울의 하이라이트는 바로 듣기만 해도 설레는 크리스마스. 주변에
              울려 퍼지는 캐롤과 도시 곳곳 빨갛게 물든 조명이 마음을 설레게
              한다. 거리뿐만 아니라 우리 집을 위해서 1년에 한 번뿐인 특별한
              크리스마스를 위해 어떤 소품을 구입해서 집 안을 꾸미면 좋을까?
              남녀노소 누구나 좋아하는 연말의 따뜻한 크리스마스를 좀 더 알차고
              따뜻하게 보내기 위해서 세심하게 공간을 꾸며보자. 일단 크리스마스에
              가장 중요한 요소는 아기자기한 소품인데, 이를테면 크리스마스트리나
              트리용 장식, 그리고 공간을 따뜻하게 만들어 주는 조명이 대표적이
              소품이다. 크리스마스트리 하나만으로도 집 안의 분위기를 달리할 수
              있는데, 그만큼 존재감이 크고 장식품이 많기 때문이다. 또한,
              크리스마스에는 사람이 많은 레스토랑에서 외식하는 것보다 집에서
              분위기를 내며 즐길 수 있도록 테이블 장식을 준비하면 뜻깊은
              크리스마스 휴일을 보낼 수 있다.이 외에는 영화 속 인테리어같은
              벽난로나 작은 촛대들 그리고 화려한 장식이 그려진 패브릭 소품 등이
              있는데, 각자 자신이 원하는 취향에 맞게 구입해서 크리스마스
              분위기를 내면 된다.
            </L.IntroduceArea>
          </L.PreviewMiddle>

          <L.PreviewBottom>
            <L.SubTitle>글쓴이 우주선 바로가기</L.SubTitle>
            <L.BottomContainer>
              <L.AuthorImg src="/book/exampleProfile.png" />
              <L.AuthorName>가나다라</L.AuthorName>
            </L.BottomContainer>
          </L.PreviewBottom>
        </L.PreviewContainer>
      </L.Wrapper>
    </div>
  );
}
