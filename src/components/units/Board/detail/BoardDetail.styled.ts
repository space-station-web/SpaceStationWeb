import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 150px 200px 20px 200px;
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
`;

export const Prev = styled.img`
  width: 32px;
  height: 32px;
  float: left;
`;

export const ShareBtn = styled.button`
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 999px;
  background-color: #1e1e1e;

  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;
`;

export const BoardWrapper = styled.div`
  z-index: 2;
  width: 1200px;
  border-radius: 20px;
  margin-top: 20px;
`;

export const TopBoard = styled.div`
  width: 100%;
  height: 125px;
  background-color: #0a0a0a;
  border-radius: 20px 20px 0px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserProfile = styled.img`
  width: 40px;
  height: 40px;

  margin-left: 60px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;

  margin-left: 20px;
`;

export const BoardMiddle = styled.p`
  width: 100%;
  padding: 60px 60px 10px 60px;

  background-color: #1e1e1e;
`;

export const BoardTopContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #b4b4b4;

  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Title = styled.div`
  width: 90%;
  padding: 15px;

  font-size: 30px;
  font-weight: 600;
  color: #dcdcdc;
`;

export const CreateAt = styled.p`
  color: #b4b4b4;
  font-size: 17px;
  position: absolute;
  bottom: 17px;
  left: 975px;
  width: 100%;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  margin: 40px 0 40px 0;
`;

export const Contents = styled.p`
  width: 1050px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
  color: #b4b4b4;

  border-bottom: 1px solid #8c8c8c;
  padding-bottom: 40px;
`;

export const BoardBottom = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 60px;
  background-color: #1e1e1e;

  border-radius: 0 0 20px 20px;
`;

export const CommentToggle = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 999px;
  border: none;

  font-size: 20px;
  background-color: #b4b4b4;
  margin-left: 10px;

  cursor: pointer;

  transition: background-color 0.3s ease; /* 트랜지션 속성 추가 */

  &:hover {
    background-color: #1e1e1e; /* 원하는 hover 시 색상으로 변경 */
    color: #b4b4b4;
    border: 1px solid #b4b4b4;
  }
`;
export const SaveButton = styled.img`
  margin-right: 50px;
  cursor: pointer;
`;
