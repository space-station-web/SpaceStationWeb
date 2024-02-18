import styled from "@emotion/styled";

export const Wrapper = styled.div`
  z-index: 1;
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

export const Heading1 = styled.p`
  font-size: 0.77rem;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: center;
  line-height: 0.88rem;

  margin-bottom: 1.5rem;
`;

export const InputTextForm = styled.div`
  display: flex;
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;

  background-color: #141414;

  margin: 0.27rem 0;
`;

export const InputF = styled.input`
  width: 17.3rem;
  height: 2.9rem;
  background-color: #141414;
  border: none;
  
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 0.65rem;
  margin-left: 1.15rem;

  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;

    &::placeholder {
      color: #C8C8C8;
      font-size: 0.57rem;
    }
  }
`;

export const Input = styled.input`
  width: 17.3rem;
  height: 2.9rem;
  background-color: #141414;
  border: none;
  
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 0.65rem;
  margin-left: 1.15rem;

  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;
  border: none;
  font-size: 0.65rem;

  margin-top: 3rem;

  background-color: #0e0e0e;
  color: #e0e0e0;

  cursor: pointer;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6d6d;
  font-size: 0.57rem;
  width: 21.9rem;
  margin-bottom: 0.5rem;
`;
