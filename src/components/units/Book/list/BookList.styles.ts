import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px 200px 3013px 200px;
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
  z-index: 1;
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

export const CategoryDiv = styled.div`
  width: 80%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CategoryContainer = styled.div`
  width: 80px;
  height: 100px;
  border: none;

  margin: 0 38px 0 38px;

  cursor: pointer;
  z-index: 100;
`;

export const CategoryIcon = styled.img``;

export const CategoryName = styled.p`
  color: #b4b4b4;
  font-size: 17px;
  font-weight: 600;

  text-align: center;
  margin-top: 15px;
`;

export const BoardBox = styled.div`
  width: 55%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개의 열
  gap: 25px; // 각 열과 행 사이의 간격 조절

  flex-direction: center;
  justify-content: center;
`;
export const Board = styled.div`
  z-index: 1000;
  width: 288px;
  height: 600px;
  border-radius: 20px;
  border: 1px solid white;
  background-color: #e7e6e6;

  display: flex;
  flex-direction: column;
  text-align: left; /* 왼쪽 정렬 추가 */
  color: #dcdcdc;

  &:nth-child(2),
  &:nth-child(4) {
    margin-top: 110px;
  }

  &:nth-child(6),
  &:nth-child(8),
  &:nth-child(10) {
    margin-top: -110px;
  }
`;

export const BoardImage = styled.img`
  width: 100%;
  height: 388px;
  img {
    box-shadow: 0px 5px 4.5px 1px rgba(0, 0, 0, 0.09);
  }
`;

export const BoardBottom = styled.div`
  width: 100%;
  padding: 20px;
`;

export const BoardCategory = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #8c8c8c;
  margin-bottom: 5px;
`;

export const BoardTitle = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #1e1e1e;

  margin-bottom: 10px;
`;

export const BoardSubTitle = styled.p`
  color: #8c8c8c;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const BoardContents = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #8c8c8c;
`;
