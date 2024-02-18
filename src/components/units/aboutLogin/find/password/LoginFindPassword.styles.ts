import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 45.6rem;
  position: relative; 
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Prev = styled.img`
  position: absolute;
  top: 11.5rem; 
  left: 0; 
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;
export const Stack = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
`;

export const Form = styled.div`
  z-index: 100;
  background-color: #1e1e1e;
  width: 30.2rem;
  min-height: 23.1rem;
  border: 0.5px solid #757575;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.9rem 0 11.5rem 0;
  padding: 2.7rem;
`;

export const Title = styled.p`
  color: #e0e0e0;
  font-size: 0.77rem;

  margin-bottom: 2.3rem;
`;

export const InputTextForm = styled.div`
  display: flex;
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;

  background-color: #141414;

  margin-bottom: 0.58rem;
`;

export const Input = styled.input`
  width: 17.3rem;
  height: 2.9rem;
  background-color: #141414;
  border: none;
  :focus {
    outline: none;
  }
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 0.65rem;
  margin-left: 1.15rem;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitButton = styled.button`
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 4.6rem;
  font-size: 0.65rem;

  background-color: #0e0e0e;
  color: #e0e0e0;
  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;

// 유틸 버튼
export const VertBtn = styled.button`
  width: 3.57rem;
  height: 1.88rem;
  border-radius: 15px;

  margin: 0.5rem 0.5rem 0 0;

  border: none;
  background-color: #1e1e1e;
  color: #e0e0e0;
  font-size: 0.65rem;

  cursor: pointer;

  :disabled {
    color: gray;
    cursor: default;
  }
`;
