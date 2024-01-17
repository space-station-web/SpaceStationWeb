import styled from "@emotion/styled";
export const Wrapper = styled.div`
  padding: 30px 200px 200px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Radial = styled.div`
  position: absolute;
  background: radial-gradient(
    41.54% 52.48% at 50.04% 49.95%,
    rgba(255, 255, 255, 0.17) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 1459px;
  height: 1172px;
  z-index: 0;
  top: 65px;
`;
export const TopDiv = styled.div`
  width: 80%;
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

export const Logo = styled.img`
  width: 84px;
  height: 84px;
  float: center;
  margin-right: 48%;
`;

export const BoardWrapper = styled.div`
  z-index: 2;
  width: 1200px;
  border-radius: 20px;
  margin-top: 60px;
`;

export const TopBoard = styled.div`
  width: 100%;
  height: 125px;
  background-color: #141414;
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

export const Title = styled.div`
  width: 1050px;
  padding: 15px;

  font-size: 30px;
  font-weight: 600;
  color: #dcdcdc;

  border-bottom: 1px solid #b4b4b4;
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

  font-size: 20px;
  background-color: #b4b4b4;
  margin-left: 10px;

  cursor: pointer;
`;
export const SaveButton = styled.img`
  margin-right: 50px;
  cursor: pointer;
`;
