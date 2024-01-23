import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-position: top center;
  background-image: url("/common/background2.png");
  background-size: cover;  

  display: flex;
  justify-content: center;
  position: relative;

`;


export const Form = styled.div`
  flex-direction: column;
`;

export const TemporaryStorageBtn = styled.div`
  width: 178px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--Primary-BlackLight, #2E2E2E);

  position: absolute;
  top: 140px;
  right: 530px;

 
`;

export const PublishWriteBtn = styled.button`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--Primary-BlackLight, #2E2E2E);

  position: absolute;
  top: 140px;
  right: 350px;

  border: none;
`;

export const TemporaryStorageBtnText = styled.button`
  width: 70.395px;

  color: var(--Layout-Color-Gray-100, #DCDCDC);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 15px; /*피그마와 다름*/
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  background: var(--Primary-BlackLight, #2E2E2E);

  margin-left: 30px; 
  cursor: pointer;erline; /* 클릭할 때 밑줄 표시 */
  border: none;
  }
`;
export const TemporaryStorageBtnNum = styled.span`
  width: 70.395px;

  color: var(--Layout-Color-Gray-100, #DCDCDC);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 15px; /*피그마와 다름*/
  font-style: normal;
  font-weight: 600;
  line-height: 45px; /* 115% */ /*피그마와 다름*/
  margin-top: 10px; 
 
  margin-left: 135px;
  cursor: pointer;
`;

export const PublishWriteBtnText = styled.span`
  color: var(--Layout-Color-Gray-100, #DCDCDC);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 15px; /*피그마와 다름*/
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 115% */ /*피그마와 다름*/

  cursor: pointer;

`;

export const HLine = styled.div`
  width: 1.5px;
  height: 23px;

  background: #8C8C8C;

  border-top: 1px solid #757575;
  margin: -35px 110px;
  
`;

export const TemporaryStorageText = styled.p`
  color: #bdbdbd;
  font-size: 17px;
  width: 500px;
  text-align: center;
  line-height: 75px;
`;

export const InputRecommendForm = styled.div`
  width: 1194px;
  height: 116px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Primary-BlackLight, #2E2E2E);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 200px;

`;


export const InputRecommendEndForm = styled.div`
  width: 1194px;
  height: 368px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Primary-BlackLight, #2E2E2E);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 200px;

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
  color: var(--Layout-Color-Gray-300, #8C8C8C);

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

export const Image = styled.span`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  position: relative;
  top: -465px;
  right: 22px;

  fill: var(--Layout-Color-Gray-200, #B4B4B4);
  cursor: pointer;
`;

export const CustomAlert = styled.div `
width: 460px;
height: 177px;
flex-shrink: 0;

border-radius: 20px;
background: var(--Primary-Black, #141414);

margin-top: 640px;
margin-left: -20px;
transition: opacity 0.5s ease-in-out;

`;

export const CustomAlertImg = styled.div`
width: 140px;
height: 140px;
flex-shrink: 0;
margin-left: 30px;
`;

export const CustomAlertText = styled.p`
color: var(--Layout-Color-Gray-100, #DCDCDC);
/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
margin-left: 140px;
margin-top: -65px;
`;


