import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1186px;
  position: relative; 
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Prev = styled.img`
  position: absolute;
  top: 300px; 
  left: 0; 
  width: 32px;
  height: 32px;
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
  width: 786px;
  min-height: 601px;
  border: 0.5px solid #757575;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px 0 300px 0;
  padding: 70px;
`;

export const Title = styled.p`
  color: #e0e0e0;
  font-size: 20px;

  margin-bottom: 60px;
`;

export const InputTextForm = styled.div`
  display: flex;
  width: 582px;
  height: 75px;
  border-radius: 20px;

  background-color: #141414;

  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 450px;
  height: 75px;
  background-color: #141414;
  border: none;
  :focus {
    outline: none;
  }
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 17px;
  margin-left: 30px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitButton = styled.button`
  width: 582px;
  height: 75px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 40px;

  background-color: #0e0e0e;
  color: #e0e0e0;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;


export const ErrorMessage = styled.div`
  color: #ff6d6d;
  font-size: 15px;
  margin-right: 370px;
`;
