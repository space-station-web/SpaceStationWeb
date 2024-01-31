import React, { ChangeEvent, useRef, useState } from "react";
import * as F from "./Write.styles";
import type { Iwrite } from "./Write.types";

export default function WriteUI(props: Iwrite): JSX.Element {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [temporaryStorageForms, setTemporaryStorageForms] = useState<number[]>([]);
  const [isTempSaveAlertVisible, setIsTempSaveAlertVisible] = useState(false);

  const [titleHeight, setTitleHeight] = useState<number>(30);

  const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleHeight(event.target.scrollHeight);
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickCreateRecommand = () => {
    setIsComponentVisible(!isComponentVisible);
    console.log("SuccessClickCreateRecommand");
  };

  const onImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // 이미지 넣기
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handlePublishClick = () => {
    setIsAlertVisible(true);

    //2초 후에 창이 사라지도록 설정
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
  };

  const handleTemporaryStorageClick = () => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
    setTemporaryStorageForms((prevForms) => [...prevForms, Date.now()]);
    
    // Show the temporary save alert
    setIsTempSaveAlertVisible(true);
  
    // Hide the temporary save alert after 2 seconds
    setTimeout(() => {
      setIsTempSaveAlertVisible(false);
    }, 2000);
  };

  const handleMoveWritingClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    // Your logic for moving to writing
  };

  return (
    <>
      <F.Wrapper>
        <F.TopContainer>
          <F.backBtn onClick={props.onClickMoveHomePage}>
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
          {isAlertVisible && (
            <F.CustomAlert>
              <F.CustomAlertImg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <path
                    d="M126.942 69.4641C126.942 85.4061 120.391 99.9568 109.725 110.624C99.4638 121.058 84.913 127.667 68.971 127.667C53.029 127.667 38.4783 121.116 28.0435 110.624C17.3768 100.015 11 85.4641 11 69.4641C11 53.4641 17.3768 38.9713 28.0435 28.7105C38.4783 18.1018 53.029 11.667 68.971 11.667C84.913 11.667 99.4638 18.0438 109.725 28.7105C120.391 38.9713 126.942 53.5221 126.942 69.4641Z"
                    fill="#FF6F00"
                  />
                  <path
                    d="M16.7974 69.5218C16.7974 98.3914 40.2177 121.812 69.0872 121.812C97.9568 121.812 121.145 98.3914 121.145 69.5218C121.145 40.6523 97.8988 17.4639 69.0872 17.4639C40.2756 17.4639 16.7974 40.7102 16.7974 69.5218Z"
                    fill="#F0F0F0"
                  />
                  <path
                    d="M49.6665 71.2034L67.2897 85.87L90.1882 53.4062"
                    stroke="#FF6F00"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </F.CustomAlertImg>
              <F.CustomAlertText>글이 발행되었습니다.</F.CustomAlertText>
            </F.CustomAlert>
          )}
        <F.Form>
          {isComponentVisible ? (
            <F.InputRecommendEndForm>
              <F.RecommendClickTitle>몰입</F.RecommendClickTitle>
              <F.RecommendClickText1>
                너무 어렵게 생각하지마요. 몰입은 무언가에 빠지는 것. 무게가
                어떻든 당신이 좋아하고 있는 걸 써내려가면 될 거예요
              </F.RecommendClickText1>
              <F.RecommendClickTextLine></F.RecommendClickTextLine>
              <F.RecommendClickText2>
                글감을 보자마자 떠올린 것은 무엇인가요?
                <br />
                떠올린 것의 특징이 어떻게 되나요?
              </F.RecommendClickText2>
              <F.ArroyEndBtn onClick={onClickCreateRecommand}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                >
                  <path
                    d="M19 10.49L10 1.5L1 10.5"
                    stroke="#8C8C8C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </F.ArroyEndBtn>
            </F.InputRecommendEndForm>
          ) : (
            <F.InputRecommendForm>
              <F.RecommendText>
                작성하기 어려우시면 글감과 몇가지 질문을 드릴게요
              </F.RecommendText>
              <F.ArroyBtn onClick={onClickCreateRecommand}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 7.51L12 16.5L21 7.5"
                    stroke="#8C8C8C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </F.ArroyBtn>
            </F.InputRecommendForm>
          )}
          <F.InputTextForm>
            <F.TitleText placeholder="글에 대한 제목을 정해주세요."></F.TitleText>

            <F.Line></F.Line>
            <F.ImageIcon onClick={onImageClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M25 22.2222V2.77778C25 1.25 23.75 0 22.2222 0H2.77778C1.25 0 0 1.25 0 2.77778V22.2222C0 23.75 1.25 25 2.77778 25H22.2222C23.75 25 25 23.75 25 22.2222ZM7.63889 14.5833L11.1111 18.7639L15.9722 12.5L22.2222 20.8333H2.77778L7.63889 14.5833Z"
                  fill="#B4B4B4"
                />
              </svg>
            </F.ImageIcon>
            <F.WrapHorizontal>
              <F.InsertImgForm>
                {selectedImages.map((image, index) => (
                  <F.InsertImg
                    key={index}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </F.InsertImgForm>
            </F.WrapHorizontal>
            <F.Writing placeholder="글이 잘 써지지 않는다면, 글감을 확인해주세요."></F.Writing>

            <input
              type="file"
              ref={fileInputRef}
              style={{
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: 0,
                height: 0,
              }}
              onChange={onFileInputChange}
              multiple // 여러 개 파일 선택 가능
            />
          </F.InputTextForm>
          {isAlertVisible && (
        <F.CustomAlert>
          <F.CustomAlertImg>
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
              <path d="M126.942 69.4641C126.942 85.4061 120.391 99.9568 109.725 110.624C99.4638 121.058 84.913 127.667 68.971 127.667C53.029 127.667 38.4783 121.116 28.0435 110.624C17.3768 100.015 11 85.4641 11 69.4641C11 53.4641 17.3768 38.9713 28.0435 28.7105C38.4783 18.1018 53.029 11.667 68.971 11.667C84.913 11.667 99.4638 18.0438 109.725 28.7105C120.391 38.9713 126.942 53.5221 126.942 69.4641Z" fill="#FF6F00"/>
              <path d="M16.7974 69.5218C16.7974 98.3914 40.2177 121.812 69.0872 121.812C97.9568 121.812 121.145 98.3914 121.145 69.5218C121.145 40.6523 97.8988 17.4639 69.0872 17.4639C40.2756 17.4639 16.7974 40.7102 16.7974 69.5218Z" fill="#F0F0F0"/>
              <path d="M49.6665 71.2034L67.2897 85.87L90.1882 53.4062" stroke="#FF6F00" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </F.CustomAlertImg>
          <F.CustomAlertText>글이 발행되었습니다.</F.CustomAlertText>
        </F.CustomAlert>
      )}
      {isTempSaveAlertVisible && (
      <F.CustomTemSaveAlert>
        <F.CustomTemSaveAlertImg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M50 12.5V61.5" stroke="#FF6F00" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27 38.625L50 61.5" stroke="#FF6F00" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M73 38.625L50 61.5" stroke="#FF6F00" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.5833 57.667V74.167C12.5833 81.542 18.2083 87.5003 25.125 87.5003H74.9583C81.875 87.5003 87.5 81.542 87.5 74.167V57.667" stroke="#FF6F00" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </F.CustomTemSaveAlertImg>
        <F.CustomTemSaveAlertText>글이 임시저장되었습니다.</F.CustomTemSaveAlertText>
      </F.CustomTemSaveAlert>
    )}
        </F.Form>
      </F.Wrapper>
    </>
  );
}