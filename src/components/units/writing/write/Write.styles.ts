import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 150px 200px 20px 200px;

  background-color: rgba(20, 20, 20, 0.8);
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
width: 11.125rem;
height: 3.125rem;
flex-shrink: 0;
border-radius: 999px;
background: var(--Primary-BlackLight, #1E1E1E);
margin-right: 1.25rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;
export const TempText = styled.span`
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
margin-right: 1.25rem;
cursor: pointer;
`;
export const TempLine = styled.p`
width: 0.094rem;
height: 1.438rem;

background: #8C8C8C;
`;
export const TempNum = styled.span`
width: 0.817rem;

margin-left: 1.25rem;
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
cursor: pointer;

`;
export const publishBtn = styled.button`

  width: 10rem;
  height: 3.125rem;
  flex-shrink: 0;

  border-radius: 62.438rem;
  background: var(--Primary-BlackLight, #1E1E1E);
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
`;
export const publishBtnText = styled.p`
color: var(--Layout-Color-Gray-100, #DCDCDC);

font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
  cursor: pointer;
`;

export const Form = styled.div`
  flex-direction: column;
`;

export const InputRecommendForm = styled.div`
  width: 74.625rem;
  height: 7.25rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: var(--Primary-BlackLight, #2e2e2e);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 1.25rem;
`;

export const InputRecommendEndForm = styled.div`
  width: 74.625rem;
  height: 23rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: var(--Primary-BlackLight, #2e2e2e);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 1.25rem;
`;

export const InputTextForm = styled.div`
  width: 74.625rem;
  height: 44.375rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: var(--Primary-BlackLight, #2e2e2e);

  margin-top: 1.25rem;
  overflow: auto;
`;

// ------------ //

export const RecommendText = styled.p`
  width: 31.25rem;
  height: 1.806rem;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #b4b4b4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 112px; /* 115% */

  margin-left: 4.375rem;
`;

export const RecommendClickTitle = styled.p`
  width: 12.5rem;
  height: 1.433rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-100, #dcdcdc);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 5.938rem; /* 115% */
  margin-left: 4.375rem;
`;

export const RecommendClickText1 = styled.p`
  width: 31.25rem;
  height: 5.484rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  /* Heading 2 */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 155.556% */
  letter-spacing: -0.011rem;
  margin-left: 4.375rem;
  margin-top: 4.375rem;
`;

export const RecommendClickTextLine = styled.div`
  width: 65.625rem;
  height: 0.063rem;
  flex-shrink: 0;
  border-radius: 0.063rem;
  background: var(--Primary-BlackDark, #0a0a0a);

  margin-left: 4.375rem;
  margin-top: 2.188rem;
`;

export const RecommendClickText2 = styled.p`
  width: 31.25rem;
  height: 5.484rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  /* Heading 2 */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 155.556% */
  letter-spacing: -0.011rem;

  margin-left: 4.375rem;
  margin-top: 2.188rem;
`;

export const ArroyBtn = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #b4b4b4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 9.688rem; /* 115% */
  cursor: pointer;

  margin-left: 37.5rem;
`;

export const ArroyEndBtn = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #b4b4b4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.438rem; /* 115% */
  cursor: pointer;

  margin-left: 37.5rem;
`;

export const TitleText = styled.input`
  width: 65.625rem;
  height: 1.875rem;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;

  margin-top: 3.125rem;
  margin-left: 4.375rem;

  border: none;
  background: transparent;
  overflow: hidden; /* 스크롤 숨기기 */

  :focus {
    outline: none;
  }
`;
//-----------------
export const Line = styled.div`
  width: 65.625rem;
  height: 0.063rem;
  flex-shrink: 0;
  border-radius: 0.063rem;
  background: var(--Layout-Color-Gray-200, #b4b4b4);

  margin-left: 4.375rem;
  margin-top: 1.875rem;
`;

export const Writing = styled.textarea`
  width: 65.625rem;
  min-height: 31.25rem;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.011rem;

  margin-left: 4.375rem;
  margin-top: 1.875rem;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
  
  // 스크롤바 디자인
  ::-webkit-scrollbar {
    width: 0.375rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a1a1a1;
    border-radius: 0.375rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0; 
    border-radius: 0.375rem; 
  }
`;

// ---------------

export const Input = styled.input`
  width: 50rem;
  background-color: #141414;
  border: none;
  :focus {
    outline: none;
  }
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 1.063rem;
`;

export const ImageIcon = styled.span`
  width: 1.563rem;
  height: 1.563rem;
  flex-shrink: 0;
  position: relative;
  left: 67.5rem;
  top: 1.875rem;

  fill: var(--Layout-Color-Gray-200, #b4b4b4);
  cursor: pointer;
`;

export const CustomAlert = styled.div`
  width: 28.75rem;
  height: 11.063rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: var(--Primary-Black, #141414);
  display: flex;
  flex-direction: row;
  align-items: center;

  /* 위치 지정 */
  position: absolute;
  top: 50rem;
  left: 73.125rem;
`;

// --------

export const CustomTemSaveAlert = styled.div`
  width: 28.75rem;
  height: 11.063rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: var(--Primary-Black, #141414);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomTemSaveAlertImg = styled.div`
 width: 6.25rem;
  height: 6.25rem;
  flex-shrink: 0;
`;
export const CustomTemSaveAlertText = styled.p`
  color: var(--Layout-Color-Gray-100, #DCDCDC);

  border-radius: 1.25rem;
  background: var(--Primary-Black, #141414);

  transition: opacity 0.5s ease-in-out;
`;

export const CustomAlertImg = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  flex-shrink: 0;
  margin-left: 1.875rem;
`;

export const CustomAlertText = styled.p`
  color: var(--Layout-Color-Gray-100, #dcdcdc);
  /* Heading 1 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.438rem; /* 115% */
`;
export const WrapHorizontal = styled.div`
  width: 100%; 
  max-width: 65.625rem; 
  overflow-x: auto; 
  display: flex;
  white-space: nowrap; 
  margin-left: 4.375rem;

  ::-webkit-scrollbar {
    height: 0.375rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a1a1a1; 
    border-radius: 0.375rem; 
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0; 
    border-radius: 0.375rem;
  }
`;

export const InsertImgForm = styled.div`
  display: flex; 
`;

export const InsertImg = styled.div`
  display: flex;
  width: 18rem;
  height: 23.125rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: lightgray 50% / cover no-repeat;
  margin-right: 1.875rem; /* 이미지 간 간격 조정 */
  margin-top: 3.125rem;
  margin-bottom: 1.875rem;
  &:last-child {
    margin-right: 4.375rem; 
  }
  &:first-child {
    margin-left: 4.375rem; 
  }
`;
export const backBtn = styled.span`
  width: 30px;
  height: 30px;
  transform: rotate(0deg);
  writing-mode: vertical-lr;
  text-align: center; 
  line-height: 30px; 
  flex-shrink: 0;
  background: url("/common/back.png");
  cursor: pointer;

  margin-right: 780px;
  margin-top: 20px;
`;
