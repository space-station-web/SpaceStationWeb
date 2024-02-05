import styled from "@emotion/styled";

export const Wrapper = styled.div`
 padding: 150px 200px 13px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: right;
`;

export const TempBtnContainer = styled.div`
width: 178px;
height: 50px;
flex-shrink: 0;
  border-radius: 999px;
background: var(--Primary-BlackLight, #1E1E1E);
margin-right: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;
export const TempText = styled.span`
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
margin-right: 20px;
cursor: pointer;
`;
export const TempLine = styled.p`
width: 1.5px;
height: 23px;

background: #8C8C8C;
`;
export const TempNum = styled.span`
width: 13.073px;

margin-left: 20px;
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
cursor: pointer;

`;
export const publishBtn = styled.button`

  width: 160px;
  height: 50px;
  flex-shrink: 0;

  border-radius: 999px;
  background: var(--Primary-BlackLight, #1E1E1E);
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
`;
export const publishBtnText = styled.p`
color: white;
  cursor: pointer;
`;

export const Form = styled.div`
  flex-direction: column;
  
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


export const HLine = styled.div`
  width: 1.5px;
  height: 23px;

  background: #8C8C8C;

  border-top: 1px solid #757575;
  margin: -35px 110px;
  
`;
export const InputRecommendForm = styled.div`
  width: 1194px;
  height: 116px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Primary-BlackLight, #2E2E2E);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 20px;

`;


export const InputRecommendEndForm = styled.div`
  width: 1194px;
  height: 368px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Primary-BlackLight, #2E2E2E);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 20px;

`;

export const InputTextForm = styled.div`
  width: 1194px;
  height: 710px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Primary-BlackLight, #2E2E2E);

  margin-top: 20px;
  overflow: auto; 

`;


export const RecommendText = styled.p`
  width: 500px;
  height: 28.897px;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #B4B4B4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 112px; /* 115% */

  margin-left: 70px;
`;

export const RecommendClickTitle = styled.p`
  width: 200px;
  height: 22.933px;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-100, #DCDCDC);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 95px; /* 115% */
  margin-left: 70px;
`;

export const RecommendClickText1 = styled.p`
  width: 500px;
  height: 87.742px;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-300, #8C8C8C);

  /* Heading 2 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
  margin-left: 70px;
  margin-top: 70px;
`;

export const RecommendClickTextLine = styled.div`
  width: 1050px;
  height: 1px;
  flex-shrink: 0;
  border-radius: 1px;
  background: var(--Primary-BlackDark, #0A0A0A);
  
  margin-left: 70px;
  margin-top: 35px;

`;

export const RecommendClickText2 = styled.p`
width: 500px;
height: 87.742px;
flex-shrink: 0;
color: var(--Layout-Color-Gray-300, #8C8C8C);

  /* Heading 2 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;

  margin-left: 70px;
  margin-top: 35px;

`;


export const ArroyBtn = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #B4B4B4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 155px; /* 115% */
  cursor: pointer;

  margin-left: 600px;

`;

export const ArroyEndBtn = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  color: var(--Layout-Color-Gray-200, #B4B4B4);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px; /* 115% */
  cursor: pointer;

  margin-left: 600px;

`;

export const TitleText = styled.p`
  width: 1050px;
  height: 30px;
  flex-shrink: 0;
  color: var(--Layout-Color-Gray-100, #DCDCDC);

  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;

  margin-top: 50px;

  margin-left: 70px;

  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
`;

export const Line = styled.div`
  width: 1050px;
  height: 1px;
  flex-shrink: 0;
  border-radius: 1px;
  background: var(--Layout-Color-Gray-200, #B4B4B4);
  

  margin-left: 70px;
  margin-top: 30px; 

`;

export const Writing = styled.textarea`
  width: 1050px;
  min-height: 500px;
  color: var(--Layout-Color-Gray-300, #8c8c8c);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.18px;

  margin-left: 70px;
  margin-top: 30px;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
  
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

export const Input = styled.input`
  width: 800px;
  background-color: #141414;
  border: none;
  :focus {
    outline: none;
  }
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 17px;
`;

export const ImageIcon = styled.span`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  position: relative;
  left: 1080px;
  top: 30px;

  fill: var(--Layout-Color-Gray-200, #B4B4B4);
  cursor: pointer;
`;

export const CustomAlert = styled.div`
  width: 460px;
  height: 177px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Primary-Black, #141414);
  display: flex;
  flex-direction: row;
  align-items: center;

  /* 위치 지정 */
  position: absolute;
  top: 800px;
  left: 1170px;
`;
export const CustomAlertImg = styled.div`
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  margin-left: 30px;
`;

export const CustomAlertText = styled.p`
  color: var(--Layout-Color-Gray-100, #dcdcdc);
  /* Heading 1 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px; /* 115% */
`;


// export const WrapVertical = styled.div`

// width: 10px;
// height: 846px;
// transform: rotate(-90deg);
// flex-shrink: 0;
// border-radius: 20px;
// background: var(--Layout-Color-Gray-300, #8C8C8C);
//    /* 가로 스크롤 */
//   overflow: auto;
//   white-space: nowrap;

//   position: relative;
//   top: 10px;
//   left: 500px;
// `;
export const WrapHorizontal = styled.div`
  width: 100%; /* 전체 너비 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  display: flex; /* 플렉스 컨테이너로 만듭니다. */
  white-space: nowrap; /* 줄 바꿈 방지 */
`;
export const InsertImgForm = styled.div`
display: flex; /* 부모에게 flex 속성 추가 */
margin-left: 80px; //지워야 함
margin-bottom: 30px;
margin-top: 50px;
`;

export const InsertImg = styled.div`
  display: flex;
  width: 288px;
  height: 370px;
  flex-shrink: 0;
  border-radius: 20px;
  background: lightgray 50% / cover no-repeat;
  margin-right: 30px; /* 이미지 간 간격 조정 */
  margin-top : 50px;
  &:last-child {
    margin-right: 70px; /* 마지막 이미지 오른쪽 간격 제거 */
  }
  &:first-child {
    margin-left: 70px; /* 첫번째 이미지 오른쪽 간격 제거 */
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