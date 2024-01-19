import React, { useState, useRef } from 'react';
import * as F from "./Write.styles";
import type { Iwrite } from "./Write.types";


export default function WriteUI(props: Iwrite): JSX.Element {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickCreateRecommand = () => {
    setIsComponentVisible(!isComponentVisible);
    console.log("SuccessClickCreateRecommand");
  };

  const onImageClick = () => {
    // 이미지를 클릭하면 파일 입력 요소 클릭
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 파일이 선택되면 실행되는 함수
    const filePath = event.target.value;
    console.log('선택된 파일 경로:', filePath);
    // 여기에 실제로 파일을 열거나 다루는 로직을 추가하면 됩니다.
  };
  
  return (
    <>
      <F.Wrapper>
          <F.TemporaryStorageBtn>
            <F.TemporaryStorageBtnText onClick={props.onClickPluseTemStorage}>임시저장</F.TemporaryStorageBtnText>
            <F.HLine>|</F.HLine>
            <F.TemporaryStorageBtnNum onClick={props.onClickMoveTemStorage}>3</F.TemporaryStorageBtnNum> {/*예시임*/}
          </F.TemporaryStorageBtn>
        <F.PublishWriteBtn>
          <F.PublishWriteBtnText onClick={props.onClickPublishWrite}>발행하기</F.PublishWriteBtnText>
        </F.PublishWriteBtn>
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
          <F.TitleText placeholder='글에 대한 제목을 정해주세요.'></F.TitleText>
            <F.Line></F.Line>
            <F.Writing placeholder='글이 잘 써지지 않는다면, 글감을 확인해주세요.'></F.Writing>
            <F.image onClick={onImageClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M25 22.2222V2.77778C25 1.25 23.75 0 22.2222 0H2.77778C1.25 0 0 1.25 0 2.77778V22.2222C0 23.75 1.25 25 2.77778 25H22.2222C23.75 25 25 23.75 25 22.2222ZM7.63889 14.5833L11.1111 18.7639L15.9722 12.5L22.2222 20.8333H2.77778L7.63889 14.5833Z" fill="#B4B4B4"/>
            </svg>
          </F.image>
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
