import styled from "@emotion/styled";
import SaveIcon from "../../../../../public/save.svg";

export const Wrapper = styled.div`
  padding: 50px 200px 113px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDiv = styled.div`
  width: 46.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prev = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  float: left;
`;

export const PreviewContainer = styled.div`
  z-index: 300;
  margin-top: 40px;
  padding: 70px;

  width: 46.1rem;

  border-radius: 20px;
  background-color: #1e1e1e;
`;

export const PreviewTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PreviewImage = styled.img`
  width: 12.9rem;
  height: 16.6rem;
  margin-right: 30px;
`;

export const PreviewContentsContainer = styled.div`
  width: 26.5rem;
  height: 16.8rem;

  border-radius: 20px;
  background-color: #141414;
  padding: 28px;

  position: relative;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  color: #dcdcdc;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-size: 0.65rem;
  color: #b4b4b4;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 15px;
`;

export const Table = styled.p`
  font-size: 0.65rem;
  color: #b4b4b4;
  font-weight: 600;
  line-height: 25px;
`;

export const TopContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PreviewBottomDiv = styled.div`
  width: 17.6rem;
  height: 8.8rem;
  display: flex;
  flex-direction: row;
`;

export const ScrollContent = styled.div`
  overflow-y: scroll;
  width: 17.3rem;
  height: 8.8rem;
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 20px;
  color: #dcdcdc;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Save = styled(SaveIcon)`
  margin: 5px 0px 0 90px;
  fill: #ff6f00;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 5rem;
  height: 1.5rem;
  border-radius: 999px;
  background-color: #b4b4b4;
  margin: 12px 0 0 20px;
  font-size: 0.76rem;

  color: #1e1e1e;

  cursor: pointer;
`;

export const PreviewMiddle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const SubTitle = styled.p`
  font-size: 0.76rem;
  color: #b4b4b4;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const IntroduceArea = styled.div`
  width: 40.3rem;
  border-radius: 20px;
  background-color: #141414;
  padding: 30px;

  font-size: 0.69rem;
  color: #b4b4b4;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;

export const PreviewBottom = styled.div`
  margin-top: 50px;
`;

export const BottomContainer = styled.div`
  width: 40.3rem;
  height: 4.4rem;
  background-color: #141414;
  border-radius: 20px;

  padding: 0 30px 0 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AuthorImg = styled.img`
  width: 3.1rem;
  height: 3.1rem;
  margin-right: 25px;
`;

export const AuthorName = styled.p`
  font-size: 0.76rem;
  color: #dcdcdc;
  font-weight: 600;
`;
