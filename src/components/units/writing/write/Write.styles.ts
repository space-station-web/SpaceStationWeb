import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 5.77rem 7.69rem 0.76rem 7.69rem;

  // background-color: rgba(20, 20, 20, 0.8);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const TempBtnContainer = styled.div`
  width: 6.8rem;
  height: 1.9rem;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--Primary-BlackLight, #1e1e1e);
  margin-right: 0.77rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TempText = styled.span`
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; 
font-style: normal;
font-weight: 600;
line-height: 0.88rem  /* 115% */
margin-right: 0.77rem; 
cursor: pointer;
`;
export const TempLine = styled.p`
width: 0.058rem;
height: 0.88rem 

background: #8C8C8C;
`;
export const TempNum = styled.span`
width: 0.5rem;

margin-left: 0.77rem; 
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; 
font-style: normal;
font-weight: 600;
line-height: 0.88rem  /* 115% */
cursor: pointer;
`;
export const publishBtn = styled.button`
  width: 6.15rem;
  height: 1.9rem;
  flex-shrink: 0;

  border-radius: 999px;
  background: var(--Primary-BlackLight, #1e1e1e);
  margin-right: 0.77rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const publishBtnText = styled.p`
  color: var(--Layout-Color-Gray-100, #dcdcdc);

  font-family: Pretendard;
  font-size: 0.77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.88rem; /* 115% */
  cursor: pointer;
`;

export const Form = styled.div`
  flex-direction: column;
  position: relative

  // 스크롤바 디자인
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a1a1a1;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0; 
    border-radius: 6px; 
  }
`;

export const InputRecommendForm = styled.div`
  width: 45.9rem;
  height: 4.46rem;
  flex-shrink: 0;
  border-radius: 0.77rem;
  background: var(--Primary-BlackLight, #2e2e2e);
  box-shadow: 0px 0.15rem 0.15rem 0px rgba(0, 0, 0, 0.25);

  margin-top: 0.77rem;
`;

export const InputRecommendEndForm = styled.div`
  width: 45.9rem;
  height: 14.15rem;
  flex-shrink: 0;
  border-radius: 0.77rem;
  background: var(--Primary-BlackLight, #2e2e2e);
  box-shadow: 0px 0.15rem 0.15rem 0px rgba(0, 0, 0, 0.25);
  margin-top: 0.77rem;
`;

export const InputTextForm = styled.div`
  width: 45.9rem;
  height: 27.3rem;
  flex-shrink: 0;
  border-radius: 0.77rem;
  background: var(--Primary-BlackLight, #2e2e2e);

  margin-top: 0.77rem;
  overflow: auto;
`;

export const RecommendText = styled.p`
  width: 19.2rem;
  height: 1.1rem;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #b4b4b4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 0.77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4.3rem; /* 115% */

  margin-left: 2.7rem;
`;

export const RecommendClickTitle = styled.p`
  width: 7.7rem;
  height: 0.88rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-100, #dcdcdc);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 0.77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.65rem; /* 115% */
  margin-left: 2.7rem;
`;

export const RecommendClickText1 = styled.p`
  width: 19.2rem;
  height: 3.38rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  /* Heading 2 */
  font-family: Pretendard;
  font-size: 0.69rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.07rem; /* 155.556% */
  letter-spacing: -0.007rem;
  margin-left: 2.7rem;
  margin-top: 2.7rem;
`;

export const RecommendClickTextLine = styled.div`
  width: 40.38rem;
  height: 0.038rem;
  flex-shrink: 0;
  border-radius: 0.038rem;
  background: var(--Primary-BlackDark, #0a0a0a);

  margin-left: 2.7rem;
  margin-top: 1.34rem;
`;

export const RecommendClickText2 = styled.p`
  width: 19.2rem;
  height: 3.38rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  /* Heading 2 */
  font-family: Pretendard;
  font-size: 0.69rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.07rem; /* 155.556% */
  letter-spacing: -0.007rem;

  margin-left: 2.7rem;
  margin-top: 1.34rem;
`;

export const ArroyBtn = styled.span`
  width: 0.92rem;
  height: 0.92rem;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #b4b4b4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 0.77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 5.96rem; /* 115% */
  cursor: pointer;

  margin-left: 23rem;
`;

export const ArroyEndBtn = styled.span`
  width: 0.92rem; 
  height: 0.92rem; 
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #b4b4b4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 0.77rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 0.88rem  /* 115% */
  cursor: pointer;

  margin-left: 23rem; 
`;

export const TitleText = styled.input`
  width: 40.38rem;
  height: 1.15rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  font-family: Pretendard;
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 600;

  margin-top: 1.9rem;
  margin-left: 2.7rem;

  border: none;
  background: transparent;
  overflow: hidden; /* 스크롤 숨기기 */

  :focus {
    outline: none;
  }
`;

export const Line = styled.div`
  width: 40.38rem;
  height: 0.038rem;
  flex-shrink: 0;
  border-radius: 0.038rem;
  background: var(--Layout-Color-Gray-200, #b4b4b4);

  margin-left: 2.7rem;
  margin-top: 1.15rem;
`;

export const Writing = styled.textarea`
  width: 40.38rem;
  min-height: 19.2rem;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  font-family: Pretendard;
  font-size: 0.69rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.86rem;
  letter-spacing: -0.007rem;

  margin-left: 2.7rem;
  margin-top: 1.15rem;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }

  // 스크롤바 디자인
  ::-webkit-scrollbar {
    width: 0.23rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a1a1a1;
    border-radius: 0.23rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 0.23rem;
  }
`;

export const Input = styled.input`
  width: 30.76rem;
  background-color: #141414;
  border: none;
  :focus {
    outline: none;
  }
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 0.65rem;
`;

export const ImageIcon = styled.span`
  width: 0.96rem;
  height: 0.96rem;
  flex-shrink: 0;
  position: relative;
  left: 41.5rem;
  top: 1.15rem;

  fill: var(--Layout-Color-Gray-200, #b4b4b4);
  cursor: pointer;
`;

export const CustomAlert = styled.div`
  width: 17.7rem;
  height: 6.8rem;
  flex-shrink: 0;
  border-radius: 0.77rem;
  background: var(--Primary-Black, #141414);
  display: flex;
  flex-direction: row;
  align-items: center;

  /* 위치 지정 */
  position: absolute;
  top: 30.76rem;
  left: 66rem;
`;

export const CustomTemSaveAlert = styled.div`
  width: 17.7rem;
  height: 6.8rem;
  z-index: 2;
  flex-shrink: 0;

  border-radius: 0.77rem;
  background: var(--Primary-Black, #141414);
  display: flex;
  flex-direction: row;
  align-items: center;

  /* 위치 지정 */
  position: absolute;
  top: 30.76rem;
  left: 66rem;
`;

export const CustomTemSaveAlertImg = styled.div`
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  margin-right: 2rem;
  margin-bottom: 1.5rem;
`;
export const CustomTemSaveAlertText = styled.p`
  color: var(--Layout-Color-Gray-100, #dcdcdc);

  border-radius: 0.77rem;
  background: var(--Primary-Black, #141414);

  transition: opacity 0.5s ease-in-out;
`;

export const CustomAlertImg = styled.div`
width: 1rem;
height: 1rem;
flex-shrink: 0;
margin-right: 2rem;
margin-bottom: 1.5rem;
`;

export const CustomAlertText = styled.p`
  color: var(--Layout-Color-Gray-100, #dcdcdc);
  /* Heading 1 */
  font-family: Pretendard;
  font-size: 0.77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.88rem; /* 115% */
`;
export const WrapHorizontal = styled.div`
  width: 100%;
  max-width: 40.38rem;
  overflow-x: auto;
  display: flex;
  white-space: nowrap;
  margin-left: 2.7rem;

  ::-webkit-scrollbar {
    height: 0.23rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a1a1a1;
    border-radius: 0.23rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 0.23rem;
  }
`;

export const InsertImgForm = styled.div`
  display: flex;
`;

export const InsertImg = styled.div`
  display: flex;
  width: 11rem;
  height: 14.2rem;
  flex-shrink: 0;
  border-radius: 0.77rem;
  background: lightgray 50% / cover no-repeat;
  margin-right: 1.15rem; /* 이미지 간 간격 조정 */
  margin-top: 1.9rem;
  margin-bottom: 1.15rem;
  &:last-child {
    margin-right: 2.7rem;
  }
  &:first-child {
    margin-left: 2.7rem;
  }
`;
export const backBtn = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(0deg);
  writing-mode: vertical-lr;
  text-align: center;
  line-height: 1.5rem;
  flex-shrink: 0;
  background: url("/common/back.png");
  cursor: pointer;

  margin-right: 30rem;
  margin-top: 0.77rem;
`;
