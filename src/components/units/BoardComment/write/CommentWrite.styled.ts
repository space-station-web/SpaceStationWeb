import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px 200px 20px 200px;
  background-color: #141414;
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
  align-items: center;
  flex: 1;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 54%;
  right: 260px; /* 오른쪽 여백 조절 */
  transform: translateY(-50%);
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
  background-color: #0a0a0a;
  border-radius: 20px;

  transition: background-image 0.5s ease; /* 트랜지션 속성 추가 */

  &:hover {
    background-image: url("/common/icon/submit(white).png");
  }
`;
