import React, { useState, useRef } from 'react';
import * as F from "./TemporaryStorageWriting.styles";
import type { ITemporaryStorage } from "./TemporaryStorageWriting.types";


export default function ITemporaryStorageWritingUI(props: ITemporaryStorage): JSX.Element {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickCreateRecommand = () => {
    setIsComponentVisible(!isComponentVisible);
    console.log("SuccessClickCreateRecommand");
  };

  // 이미지 아이콘 클릭
  const onImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 이미지 넣기
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setSelectedImages(prevImages => [...prevImages, ...newImages]);
    }
  };
   

  const handlePublishClick = () => {
    setIsAlertVisible(true);

    // 2초 후에 사라지도록 설정
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
  };

  const handleTemporaryStorageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('임시저장 버튼이 클릭되었습니다.');
    setTemporaryStorageCount(temporaryStorageCount + 1);
  };
   
  

  return (
    <>
      <F.Wrapper>
      <F.TopContainer>
      <F.backBtn onClick={props.onClickMoveTemStorage}>
          </F.backBtn>
          <F.TempBtnContainer>
            <F.TempText onClick={handleTemporaryStorageClick}>
              임시저장
            </F.TempText>
            <F.TempLine></F.TempLine>
            <F.TempNum onClick={props.onClickMoveTemStorage}>
              {temporaryStorageCount}
            </F.TempNum>
          </F.TempBtnContainer>
          <F.publishBtn onClick={handlePublishClick}>
            <F.publishBtnText>발행하기</F.publishBtnText>
          </F.publishBtn>
         
        </F.TopContainer>
        <F.Form>
          {isComponentVisible ? (
            <F.InputRecommendEndForm>
            <F.RecommendClickTitle>몰입</F.RecommendClickTitle>
                  <F.RecommendClickText1>
                  너무 어렵게 생각하지마요. 몰입은 무언가에 빠지는 것. 무게가 어떻든 당신이 좋아하고 있는 걸 써내려가면 될 거예요
                  </F.RecommendClickText1>
                  <F.RecommendClickTextLine></F.RecommendClickTextLine>
                  <F.RecommendClickText2>글감을 보자마자 떠올린 것은 무엇인가요?<br/>
                  떠올린 것의 특징이 어떻게 되나요?</F.RecommendClickText2>
            <F.ArroyEndBtn onClick={onClickCreateRecommand}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path d="M19 10.49L10 1.5L1 10.5" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </F.ArroyEndBtn>
          </F.InputRecommendEndForm>
          ) : (
            <F.InputRecommendForm>
              <F.RecommendText>작성하기 어려우시면 글감과 몇가지 질문을 드릴게요</F.RecommendText>
              <F.ArroyBtn onClick={onClickCreateRecommand}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7.51L12 16.5L21 7.5" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </F.ArroyBtn>
            </F.InputRecommendForm>
          )}
          <F.InputTextForm>
          <F.TitleText>크리스마스 준비 🎄</F.TitleText>
            <F.Line></F.Line>
            <F.ImageIcon onClick={onImageClick}>
             
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M25 22.2222V2.77778C25 1.25 23.75 0 22.2222 0H2.77778C1.25 0 0 1.25 0 2.77778V22.2222C0 23.75 1.25 25 2.77778 25H22.2222C23.75 25 25 23.75 25 22.2222ZM7.63889 14.5833L11.1111 18.7639L15.9722 12.5L22.2222 20.8333H2.77778L7.63889 14.5833Z" fill="#B4B4B4"/>
            </svg>
          </F.ImageIcon>
          <F.WrapHorizontal>
          <F.InsertImgForm>
            {selectedImages.map((image, index) => (
              <F.InsertImg key={index} style={{ backgroundImage: `url(${image})` }} />
            ))}
          </F.InsertImgForm>
          </F.WrapHorizontal>
          
            <F.Writing>집을 온통 초록색과 빨간색으로 물
겨울의 하이라이트는 바로 듣기만 해도 설레는 크리스마스. 주변에 울려 퍼지는 캐롤과 도시 곳곳 빨갛게 물든 조명이 마음을 설레게 한다. 거리뿐만 아니라 우리 집을 위해서 1년에 한 번뿐인 특별한 크리스마스를 위해 어떤 소품을 구입해서 집 안을 꾸미면 좋을까? 남녀노소 누구나 좋아하는 연말의 따뜻한 크리스마스를 좀 더 알차고 따뜻하게 보내기 위해서 세심하게 공간을 꾸며보자. 일단 크리스마스에 가장 중요한 요소는 아기자기한 소품인데, 이를테면 크리스마스트리나 트리용 장식, 그리고 공간을 따뜻하게 만들어 주는 조명이 대표적이 소품이다. 크리스마스트리 하나만으로도 집 안의 분위기를 달리할 수 있는데, 그만큼 존재감이 크고 장식품이 많기 때문이다. 또한, 크리스마스에는 사람이 많은 레스토랑에서 외식하는 것보다 집에서 분위기를 내며 즐길 수 있도록 테이블 장식을 준비하면 뜻깊은 크리스마스 휴일을 보낼 수 있다.이 외에는 영화 속 인테리어같은 벽난로나 작은 촛대들 그리고 화려한 장식이 그려진 패브릭 소품 등이 있는데, 각자 자신이 원하는 취향에 맞게 구입해서 크리스마스 분위기를 내면 된다. 보는 것만으로도 좋지만, 준비하는 것 자체로 설레는 크리스마스 인테리어를 준비해보자. 우리 집을 위한 크리스마스 준비에는 어떤 것들이 있는지 궁금하다면, 오늘의 기사를 주목하자. 집을 온통 초록색과 빨간색으로 물
겨울의 하이라이트는 바로 듣기만 해도 설레는 크리스마스. 주변에 울려 퍼지는 캐롤과 도시 곳곳 빨갛게 물든 조명이 마음을 설레게 한다. 거리뿐만 아니라 우리 집을 위해서 1년에 한 번뿐인 특별한 크리스마스를 위해 어떤 소품을 구입해서 집 안을 꾸미면 좋을까? 남녀노소 누구나 좋아하는 연말의 따뜻한 크리스마스를 좀 더 알차고 따뜻하게 보내기 위해서 세심하게 공간을 꾸며보자. 일단 크리스마스에 가장 중요한 요소는 아기자기한 소품인데, 이를테면 크리스마스트리나 트리용 장식, 그리고 공간을 따뜻하게 만들어 주는 조명이 대표적이 소품이다. 크리스마스트리 하나만으로도 집 안의 분위기를 달리할 수 있는데, 그만큼 존재감이 크고 장식품이 많기 때문이다. 또한, 크리스마스에는 사람이 많은 레스토랑에서 외식하는 것보다 집에서 분위기를 내며 즐길 수 있도록 테이블 장식을 준비하면 뜻깊은 크리스마스 휴일을 보낼 수 있다.이 외에는 영화 속 인테리어같은 벽난로나 작은 촛대들 그리고 화려한 장식이 그려진 패브릭 소품 등이 있는데, 각자 자신이 원하는 취향에 맞게 구입해서 크리스마스 분위기를 내면 된다. 보는 것만으로도 좋지만, 준비하는 것 자체로 설레는 크리스마스 인테리어를 준비해보자. 우리 집을 위한 크리스마스 준비에는 어떤 것들이 있는지 궁금하다면, 오늘의 기사를 주목하자.</F.Writing>
            
          <input
            type="file"
            ref={fileInputRef}
            style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: 0, height: 0 }}
            onChange={onFileInputChange}
          />
          </F.InputTextForm>

        </F.Form>
      </F.Wrapper>
    </>
  );
}

