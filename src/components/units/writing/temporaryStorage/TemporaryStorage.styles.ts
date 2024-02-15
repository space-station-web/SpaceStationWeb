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

export const Form = styled.div`
  flex-direction: column;
  width: 74.625rem;
  height: 78.75rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: var(--Primary-BlackLight, #1E1E1E);
  margin-top: 1.25rem;
`;

export const FormHeader = styled.div`
  width: 74.625rem;
  height: 7.813rem;
  flex-shrink: 0;

  border-radius: 20px 20px 0px 0px;
  background: var(--Primary-Black, #141414);  
`;

export const FormHeaderWrite = styled.p`
  color: var(--Layout-Color-Gray-100, #DCDCDC);

  /* Heading */
  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 5.625rem;

  margin-left: 2.813rem;
`;

export const FormHeaderNum = styled.p`
  color: var(--Layout-Color-Gray-300, #8C8C8C);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  margin-left: 2.813rem;

  margin-top: -1.25rem;
`;

export const OneForm = styled.div`
  flex-direction: column;

  width: 74.625rem;
  height: 5.813rem;
  flex-shrink: 0;

  border-bottom: 0.063rem solid var(--Layout-Color-Gray-300, #8C8C8C);
  background: var(--Primary-BlackLight, #1E1E1E);
`;

export const Date = styled.p`
color: var(--Layout-Color-Gray-300, #8C8C8C);

/* Heading 2 */
font-family: Pretendard;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 155.556% */
letter-spacing: -0.18px;

margin-left: 2.813rem;
position: relative;
top: 1.875rem;
`;

export const Title = styled.span`
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
cursor: pointer;

margin-left: 12.5rem;
`;

export const DeleteBtn = styled.button`
width: 8.125rem;
height: 2.5rem;
flex-shrink: 0;

border-radius: 62.438rem;
background: var(--Layout-Color-Gray-200, #B4B4B4);

border: none;
cursor: pointer;
margin-left: 34.375rem;
`;

export const DeleteBtnText = styled.p`
width: 2.203rem;
height: 1.529rem;
flex-shrink: 0;

color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
`;

export const Line = styled.div`
  width: 74.625rem;
  height: 0.063rem;
  flex-shrink: 0;

  background: var(--Layout-Color-Gray-300, #8C8C8C);
`;

export const DelModalWrapper = styled.div`
width: 22.5rem;
height: 15rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--Layout-Color-Gray-100, #DCDCDC);

// -- 수정 -- //
position: relative;
top: -80px; 
left: 220px;

`;

export const DelModalText = styled.p`
color: var(--Primary-BlackDark, #0A0A0A);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */

// -------- 수정
position: relative;
top: 80px; 
left: 40px;

`;

export const DelModalYesBtn = styled.button`
display: inline-flex;
/*padding: 8px 56px;*/
width: 8.125rem;  
height: 2.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;

border-radius: 999px;
background: var(--Layout-Color-Gray-200, #B4B4B4);

//-- 수정
position: relative;
top: 110px; 
left: 40px;

border: none;

`;
export const DelModalYesText = styled.p`
color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
cursor: pointer;
`;

export const DelModalNoBtn = styled.button`
display: inline-flex;
/* padding: 8px 56px; */
width: 8.125rem;  
height: 2.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;

border-radius: 62.438rem;
background: var(--Layout-Color-Gray-200, #B4B4B4);

//---- 수정
position: relative;
top: 110px; 
left: 65px;
border: none;
`;

export const DelModalNoText = styled.p`
color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.438rem; /* 115% */
cursor: pointer;
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
