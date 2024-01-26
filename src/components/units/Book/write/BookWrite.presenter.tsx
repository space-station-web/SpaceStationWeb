import * as L from "./BookWrite.styles"
import type { IBookWriteProps } from "./BookWrite.types"

export default function BookWriteUI(props:IBookWriteProps): JSX.Element {
  return (
    <>
      <L.Wrapper>
        <L.TopDiv>
          <L.Button>뒤로가기</L.Button>
          <L.Button>다음</L.Button>
        </L.TopDiv>

        <L.BookContainer>
          <L.TitleContainer>
            <L.TitleInput placeholder="책에 대한 제목을 정해주세요."/>
            <L.DividingLine></L.DividingLine>
          </L.TitleContainer>
          
          <L.ImageContainer>
            <L.ImageBox onClick={props.onClickImage} >
              <input type="file" style={{ display: "none" }} onChange={props.onChangeFile} ref={props.fileRef} />
              <L.UploadIcon src="/book/upload.png"/>
              <L.TextBox>커버사진 추가하기</L.TextBox>
            </L.ImageBox>
            <img src={`https://storage.googleapis.com/${props.imageUrl}`} />
          </L.ImageContainer>

          <L.Contents>집을 온통 초록색과 빨간색으로 물
겨울의 하이라이트는 바로 듣기만 해도 설레는 크리스마스. 주변에 울려 퍼지는 캐롤과 도시 곳곳 빨갛게 물든 조명이 마음을 설레게 한다. 거리뿐만 아니라 우리 집을 위해서 1년에 한 번뿐인 특별한 크리스마스를 위해 어떤 소품을 구입해서 집 안을 꾸미면 좋을까? 남녀노소 누구나 좋아하는 연말의 따뜻한 크리스마스를 좀 더 알차고 따뜻하게 보내기 위해서 세심하게 공간을 꾸며보자. 일단 크리스마스에 가장 중요한 요소는 아기자기한 소품인데, 이를테면 크리스마스트리나 트리용 장식, 그리고 공간을 따뜻하게 만들어 주는 조명이 대표적이 소품이다. 크리스마스트리 하나만으로도 집 안의 분위기를 달리할 수 있는데, 그만큼 존재감이 크고 장식품이 많기 때문이다. 또한, 크리스마스에는 사람이 많은 레스토랑에서 외식하는 것보다 집에서 분위기를 내며 즐길 수 있도록 테이블 장식을 준비하면 뜻깊은 크리스마스 휴일을 보낼 수 있다.이 외에는 영화 속 인테리어같은 벽난로나 작은 촛대들 그리고 화려한 장식이 그려진 패브릭 소품 등이 있는데, 각자 자신이 원하는 취향에 맞게 구입해서 크리스마스 분위기를 내면 된다. 보는 것만으로도 좋지만, 준비하는 것 자체로 설레는 크리스마스 인테리어를 준비해보자. 우리 집을 위한 크리스마스 준비에는 어떤 것들이 있는지 궁금하다면, 오늘의 기사를 주목하자. 집을 온통 초록색과 빨간색으로 물
겨울의 하이라이트는 바로 듣기만 해도 설레는 크리스마스. 주변에 울려 퍼지는 캐롤과 도시 곳곳 빨갛게 물든 조명이 마음을 설레게 한다. 거리뿐만 아니라 우리 집을 위해서 1년에 한 번뿐인 특별한 크리스마스를 위해 어떤 소품을 구입해서 집 안을 꾸미면 좋을까? 남녀노소 누구나 좋아하는 연말의 따뜻한 크리스마스를 좀 더 알차고 따뜻하게 보내기 위해서 세심하게 공간을 꾸며보자. 일단 크리스마스에 가장 중요한 요소는 아기자기한 소품인데, 이를테면 크리스마스트리나 트리용 장식, 그리고 공간을 따뜻하게 만들어 주는 조명이 대표적이 소품이다. 크리스마스트리 하나만으로도 집 안의 분위기를 달리할 수 있는데, 그만큼 존재감이 크고 장식품이 많기 때문이다. 또한, 크리스마스에는 사람이 많은 레스토랑에서 외식하는 것보다 집에서 분위기를 내며 즐길 수 있도록 테이블 장식을 준비하면 뜻깊은 크리스마스 휴일을 보낼 수 있다.이 외에는 영화 속 인테리어같은 벽난로나 작은 촛대들 그리고 화려한 장식이 그려진 패브릭 소품 등이 있는데, 각자 자신이 원하는 취향에 맞게 구입해서 크리스마스 분위기를 내면 된다. 보는 것만으로도 좋지만, 준비하는 것 자체로 설레는 크리스마스 인테리어를 준비해보자. 우리 집을 위한 크리스마스 준비에는 어떤 것들이 있는지 궁금하다면, 오늘의 기사를 주목하자.</L.Contents>
        </L.BookContainer>
      </L.Wrapper>
    </>
  )
}
