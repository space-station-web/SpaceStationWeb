import styled from "@emotion/styled";

export const Wrapper = styled.div`
padding: 150px 200px 13px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; //스크롤해도 이어짐
`;

export const Form = styled.div`
  flex-direction: column;
  width: 1194px;
height: 1260px;
flex-shrink: 0;

  border-radius: 20px;
  background: var(--Primary-BlackLight, #1E1E1E);
  margin-top: 20px;
`;

export const FormHeader = styled.div`
  flex-direction: column;

  width: 1194px;
  height: 125px;
  flex-shrink: 0;

  border-radius: 20px 20px 0px 0px;
  background: var(--Primary-Black, #141414);  

`;

export const FormHeaderWrite = styled.p`
  color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading */
font-family: Pretendard;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 90px;

margin-left: 45px;
`;

export const FormHeaderNum = styled.p`
  color: var(--Layout-Color-Gray-300, #8C8C8C);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
margin-left: 45px;

margin-top: -20px;
`;

export const OneForm = styled.div`
flex-direction: column;

width: 1194px;
height: 93px;
flex-shrink: 0;

border-bottom: 1px solid var(--Layout-Color-Gray-300, #8C8C8C);
background: var(--Primary-BlackLight, #1E1E1E);

`;

export const Date = styled.p`
color: var(--Layout-Color-Gray-300, #8C8C8C);

/* Heading 2 */
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
letter-spacing: -0.18px;

margin-left: 45px;
`;

export const Title = styled.span`
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
cursor: pointer;

margin-left: 200px;
`;

export const DeleteBtn = styled.button`
width: 130px;
height: 40px;
flex-shrink: 0;

border-radius: 999px;
background: var(--Layout-Color-Gray-200, #B4B4B4);

border: none;
cursor: pointer;
margin-left: 550px;

`;

export const DeleteBtnText = styled.p`
width: 35.255px;
height: 24.468px;
flex-shrink: 0;

color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
`;

export const Line = styled.div`
  width: 1194px;
  height: 1px;
  flex-shrink: 0;

  background: var(--Layout-Color-Gray-300, #8C8C8C);
`;

export const DelModalWrapper = styled.div`
width: 360px;
height: 240px;
flex-shrink: 0;
border-radius: 20px;
background: var(--Layout-Color-Gray-100, #DCDCDC);

position: relative;
top: -80px; 
left: 220px;

`;

export const DelModalText = styled.p`
color: var(--Primary-BlackDark, #0A0A0A);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */

position: relative;
top: 80px; 
left: 40px;

`;

export const DelModalYesBtn = styled.button`
display: inline-flex;
/*padding: 8px 56px;*/
width: 130px;  
height: 40px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 999px;
background: var(--Layout-Color-Gray-200, #B4B4B4);

position: relative;
top: 110px; 
left: 40px;

border: none;

`;
export const DelModalYesText = styled.p`
color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
cursor: pointer;


`;
export const DelModalNoBtn = styled.button`
display: inline-flex;
/* padding: 8px 56px; */
width: 130px;  
height: 40px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 999px;
background: var(--Layout-Color-Gray-200, #B4B4B4);

position: relative;
top: 110px; 
left: 65px;
border: none;
`;
export const DelModalNoText = styled.p`
color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 115% */
cursor: pointer;

`;