import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 150px 200px 213px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const TopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index:2;
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 999px;

  background-color: #1e1e1e;
  color: #dcdcdc;

  cursor: pointer;
`

export const BookContainer = styled.div`
  width:1200px;
  border-radius: 20px;
  background-color: #1e1e1e;
  padding:80px;
  margin-top:20px;
  z-index:2;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const TitleInput = styled.input`
  width:97%;
  height:50px;
  border:none;
  background:none;

  color: #8c8c8c;
  font-size: 30px;
  font-weight: 600;

  :focus{
    outline: none;
  }
`

export const DividingLine = styled.div`
  width:100%;
  height:1px;
  background-color: #8c8c8c;
`

export const ImageContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 80px 0 66px 0;
`

export const ImageBox = styled.div`
  width: 288px;
  height: 370px;
  border-radius:20px;
  border: 1px solid #dcdcdc;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  cursor: pointer;
`

export const TextBox = styled.p`
  width:74px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px; /* 115% */
  color: #dcdcdc;
  margin-top:20px;
`

export const UploadIcon = styled.img`
`

export const Contents = styled.div`
  width:100%;
  color: #b4b4b4;
  font-size: 18px;
  font-weight: 400;
  line-height: 33px; /* 155.556% */
  letter-spacing: -0.18px;
`


