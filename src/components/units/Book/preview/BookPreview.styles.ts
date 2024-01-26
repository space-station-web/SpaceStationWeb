import styled from "@emotion/styled";
import SaveIcon from "../../../../../public/save.svg"

export const Wrapper = styled.div`
  padding: 150px 200px 113px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prev = styled.img`
  width: 32px;
  height: 32px;
  float: left;
`;

export const PreviewContainer = styled.div`
  z-index: 300;
  margin-top: 40px;
  padding:70px;

  width: 1194px;
  height: 1167px;
  border-radius: 20px;
  background-color: #1e1e1e;
`;

export const PreviewTop = styled.div`
  display:flex;
  flex-direction:row;
`;

export const PreviewImage = styled.img`
  margin-right: 30px;
`;

export const PreviewContentsContainer = styled.div`
  width: 689px;
  height: 439px;

  border-radius: 20px;
  background-color:#141414;
  padding:50px;

  position: relative;
`;

export const Title = styled.p`
  font-size: 30px;
  color:#dcdcdc;
  font-weight: 600;

  margin-bottom:10px;
`;

export const Author = styled.p`
  font-size: 17px;
  color:#b4b4b4;
  font-weight: 600;
  line-height: 25px;
  margin-bottom:25px;
`;

export const Table = styled.p`
  font-size: 17px;
  color:#b4b4b4;
  font-weight: 600;
  line-height: 25px;
`;

export const ButtonContainer = styled.div`
  display:flex;
  flex-direction:row;

  position: absolute;
  top: 380px;
  left: 340px;
`;

export const Save = styled(SaveIcon)`
  margin: 5px 20px 0 0;
  fill: #FF6F00;
  cursor: pointer;
`

export const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 999px;
  background-color: #b4b4b4;
  margin-right: 8px;

  color: #1e1e1e;

  cursor:pointer;
`;

export const PreviewMiddle = styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 50px;
`

export const SubTitle = styled.p`
  font-size: 20px;
  color:#b4b4b4;
  font-weight: 600;
  margin-bottom: 15px;
`

export const IntroduceArea = styled.div`
  width: 1050px;
  border-radius: 20px;
  background-color: #141414;
  padding:30px;

  font-size: 18px;
  color: #b4b4b4;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`

export const PreviewBottom = styled.div`
  margin-top: 50px;
`

export const BottomContainer = styled.div`
  width: 1050px;
  height: 115px;
  background-color: #141414;
  border-radius:20px;

  padding: 0 30px 0 30px;

  display:flex;
  flex-direction:row;
  align-items:center;
`

export const AuthorImg = styled.img`
  width:82px;
  height:82px;
  margin-right: 25px;
`

export const AuthorName = styled.p`
  font-size: 20px;
  color:#dcdcdc;
  font-weight: 600;
`


