import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0px 200px 10px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriteForm = styled.div`
  width: 46.1rem;
  height: 3.6rem;
  padding: 10px 15px 10px 15px;
  background-color: #1e1e1e;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserProfile = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 57px;
`;

export const InputContainer = styled.div`
  display: flex;

  position: relative;
  align-items: center;
  flex: 1;
`;

export const IconContainer = styled.div`
  position: absolute; /* 추가 */

  left: 740px;
`;

export const Lock = styled.img`
  cursor: pointer;
`;

export const Input = styled.input`
  width: 39rem;
  height: 2.1rem;
  border: none;
  border-radius: 20px;
  background-color: #0a0a0a;

  margin-left: 22px;
  padding: 20px;

  color: #dcdcdc;
  font-size: 0.65rem;

  outline: none;
`;
export const Submit = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 2.1rem;
  height: 2.1rem;
  background-color: #0a0a0a;

  border-radius: 15px;
  cursor: pointer;

  transition: background-image 0.5s ease; /* 트랜지션 속성 추가 */

  &:hover {
    background-color: gray;
  }
`;
