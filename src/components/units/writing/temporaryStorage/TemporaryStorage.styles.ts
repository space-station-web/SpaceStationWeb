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


export const Form = styled.div`
  flex-direction: column;
  width: 45.9rem; // z
  height: 48.46rem;
  flex-shrink: 0;

  border-radius: 0.77rem; // z
  background: var(--Primary-BlackLight, #1E1E1E);
  margin-top: 0.77rem; // z
`;

export const FormHeader = styled.div`
  width: 45.9rem; // z
  height: 4.8rem;
  flex-shrink: 0;

  border-radius: 0.77rem 0.77rem 0px 0px;
  background: var(--Primary-Black, #141414);  
`;

export const FormHeaderWrite = styled.p`
  color: var(--Layout-Color-Gray-100, #DCDCDC);

  /* Heading */
  font-family: Pretendard;
  font-size: 1.15rem; // z
  font-style: normal;
  font-weight: 600;
  line-height: 3.46rem;

  margin-left: 1.73rem; // z
`;

export const FormHeaderNum = styled.p`
  color: var(--Layout-Color-Gray-300, #8C8C8C);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 0.77rem; // z
  font-style: normal;
  font-weight: 600;
  margin-left: 1.73rem; // z

  margin-top: -0.77rem;
`;

export const OneForm = styled.div`
  flex-direction: column;

  width: 45.9rem; // z
  height: 3.57rem;
  flex-shrink: 0;

  border-bottom: 0.038rem solid var(--Layout-Color-Gray-300, #8C8C8C); // z
  background: var(--Primary-BlackLight, #1E1E1E);
`;

export const Date = styled.p`
color: var(--Layout-Color-Gray-300, #8C8C8C);

/* Heading 2 */
font-family: Pretendard;
font-size: 0.69rem;
font-style: normal;
font-weight: 400;
line-height: 1.07rem; /* 155.556% */
letter-spacing: -0.111px;

margin-left: 1.73rem; // z
position: relative;
top: 1.15rem; // z
`;

export const Title = styled.span`
color: var(--Layout-Color-Gray-100, #DCDCDC);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; // z
font-style: normal;
font-weight: 600;
line-height: 0.88rem; /* 115% */ // z
cursor: pointer;

margin-left: 7.7rem;
`;

export const DeleteBtn = styled.button`
width: 5rem; // z
height: 1.53rem; // z
flex-shrink: 0;

border-radius: 38.42rem; // z
background: var(--Layout-Color-Gray-200, #B4B4B4);

border: none;
cursor: pointer;
margin-left: 21.15rem;
`;

export const DeleteBtnText = styled.p`
width: 1.35rem;
height: 0.94rem;
flex-shrink: 0;

color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; // z
font-style: normal;
font-weight: 600;
line-height: 0.88rem; /* 115% */ // z
`;

export const Line = styled.div`
  width: 45.9rem; // z
  height: 0.038rem; // z
  flex-shrink: 0;

  background: var(--Layout-Color-Gray-300, #8C8C8C);
`;

export const DelModalWrapper = styled.div`
width: 13.84rem;
height: 9.23rem;
flex-shrink: 0;
border-radius: 0.77rem; // z
background: var(--Layout-Color-Gray-100, #DCDCDC);

// -- 수정 -- //
position: relative;
top: -3.07rem; 
left: 8.46rem;

`;

export const DelModalText = styled.p`
color: var(--Primary-BlackDark, #0A0A0A);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; // z
font-style: normal;
font-weight: 600;
line-height: 0.88rem; /* 115% */ // z

// -------- 수정
position: relative;
top: 3.07rem; 
left: 1.53rem; // z

`;

export const DelModalYesBtn = styled.button`
display: inline-flex;
/*padding: 0.3rem 2.15rem;*/ // z
width: 5rem;   // z
height: 1.53rem; // z
justify-content: center;
align-items: center;
gap: 0.385rem;

border-radius: 38.423rem;
background: var(--Layout-Color-Gray-200, #B4B4B4);

//-- 수정
position: relative;
top: 4.23rem; // z
left: 1.53rem; // z

border: none;

`;
export const DelModalYesText = styled.p`
color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; // z
font-style: normal;
font-weight: 600;
line-height: 0.88rem; /* 115% */ // z
cursor: pointer;
`;

export const DelModalNoBtn = styled.button`
display: inline-flex;
/* padding: 0.3rem 2.15rem; */ // z
width: 5rem;   // z
height: 1.53rem; // z
justify-content: center;
align-items: center;
gap: 0.385rem;

border-radius: 38.42rem; // z
background: var(--Layout-Color-Gray-200, #B4B4B4);

//---- 수정
position: relative;
top: 4.23rem; // z
left: 2.5rem;
border: none;
`;

export const DelModalNoText = styled.p`
color: var(--Primary-BlackLight, #1E1E1E);

/* Heading 1 */
font-family: Pretendard;
font-size: 0.77rem; // z
font-style: normal;
font-weight: 600;
line-height: 0.88rem; /* 115% */ // z
cursor: pointer;
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

  margin-right: 45rem;
  margin-top: 0.77rem; 
`;
