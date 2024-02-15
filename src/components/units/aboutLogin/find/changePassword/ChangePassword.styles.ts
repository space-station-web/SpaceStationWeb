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
  width: 786px;
  height: 601px;
  border: 0.5px solid #757575;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px 0 300px 0;
  padding: 70px 0 0 0;
`;

export const Heading1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: center;
  line-height: 23px;

  margin-bottom: 40px;
`;

export const InputTextForm = styled.div`
  display: flex;
  width: 582px;
  height: 75px;
  border-radius: 20px;

  background-color: #141414;

  margin: 7px 0;
`;

export const InputF = styled.input`
  width: 450px;
  height: 75px;
  background-color: #141414;
  border: none;
  
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 17px;
  margin-left: 30px;

  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;

    &::placeholder {
      color: #C8C8C8;
      font-size: 15px;
    }
  }
`;

export const Input = styled.input`
  width: 450px;
  height: 75px;
  background-color: #141414;
  border: none;
  
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 17px;
  margin-left: 30px;

  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 582px;
  height: 75px;
  border-radius: 20px;
  border: none;

  margin-top: 80px;

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
  font-size: 15px;
  width: 570px;
  margin-bottom: 13px;
`;
