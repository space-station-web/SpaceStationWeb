import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px 200px 20px 200px;
  background-color: #0a0a0a;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriteForm = styled.div`
  width: 1200px;
  height: 110px;
  padding: 23px;
  background-color: #464646;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserProfile = styled.img`
  width: 57px;
  height: 57px;
  border-radius: 57px;
`;

export const InputContainer = styled.div`
  display: flex;

  position: relative;
  align-items: center;
  flex: 1;
`;

export const IconContainer = styled.div`
  //width: 100px;
  position: absolute; /* 추가 */

  left: 960px;
`;

export const Lock = styled.img`
  cursor: pointer;
`;

export const Input = styled.input`
  width: 990px;
  height: 72px;
  border: none;
  border-radius: 20px;
  background-color: #0a0a0a;

  margin-left: 22px;
  padding: 20px;

  color: #dcdcdc;
  font-size: 17px;

  position: relative;
`;
export const Submit = styled.div`
  width: 72px;
  height: 72px;
  background-image: url("/common/icon/submit(black).png");
  border-radius: 20px;
  cursor: pointer;

  transition: background-image 0.5s ease; /* 트랜지션 속성 추가 */

  &:hover {
    background-image: url("/common/icon/submit(white).png");
  }
`;
