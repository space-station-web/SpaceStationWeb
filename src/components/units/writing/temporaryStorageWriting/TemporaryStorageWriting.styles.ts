import styled from "@emotion/styled";

// export const Wrapper = styled.div`
// background: #000;
// background-position: top center;
//   background-size: cover;  

//   display: flex;
//   justify-content: center;
//   position: relative;
// `;

export const Wrapper = styled.div`
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative; //스크롤해도 이어짐
`;

export const Form = styled.div`
  flex-direction: column;

  width: 800px; //다름
  height: 1000px; //다름
  flex-shrink: 0;

  border-radius: 20px;
  background: var(--Primary-BlackLight, #1E1E1E);

  margin-top: 180px;
  margin-bottom: 180px;
`;

export const FormHeader = styled.div`
  flex-direction: column;

  width: 800px; //다름
  height: 80px; //다름
  flex-shrink: 0;

  border-radius: 20px 20px 0px 0px;
  background: var(--Primary-Black, #141414);  

`;

export const FormHeaderWrite = styled.p`
  color: var(--Layout-Color-Gray-100, #DCDCDC);
  text-align: center;

  /* Heading */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 55px;

  margin-right: 620px;
`;

export const FormHeaderNum = styled.p`
  color: var(--Layout-Color-Gray-300, #8C8C8C);

  /* Heading 1 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  //line-height: 23px; /* 115% */
  line-height: 2px;

  margin-left: 45px;
`;

export const OneForm = styled.div`
flex-direction: column;

  width: 800px; //다름
  height: 80px; //다름
  flex-shrink: 0;

  background: var(--Primary-Blue, #08298A);  

`;

export const Date = styled.p`
color: var(--Layout-Color-Gray-300, #8C8C8C);

/* Heading 2 */
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 80px; /* 155.556% */
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
position: relative;
left: 170px;
bottom: 50px;
cursor: pointer;
`;

export const DeleteBtn = styled.button`
width: 130px;
height: 40px;
flex-shrink: 0;

border-radius: 999px;
background: var(--Layout-Color-Gray-200, #B4B4B4);
margin-left: 650px;
position: relative;
top: -80px; 

border: none;
cursor: pointer;

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
  width: 800px;
  height: 1px;
  flex-shrink: 0;

  background: var(--Layout-Color-Gray-300, #8C8C8C);
`;

