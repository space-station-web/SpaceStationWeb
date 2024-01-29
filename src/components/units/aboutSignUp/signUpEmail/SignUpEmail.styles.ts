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
  margin-top: 10px;

  background-color: #0e0e0e;
  color: #e0e0e0;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;

export const UtilBox = styled.div`
  width: 570px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckBox = styled.input`
  appearance: none;
  border: 1px solid #8c8c8c;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 15px;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #ffffff;
  }
`;

export const UtilText = styled.span`
  color: #8c8c8c;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  margin-left: 5px;
  cursor: pointer;
  text-decoration: underline;
`;

export const NormText = styled.span`
  color: #8c8c8c;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  
`;

export const ErrorMessage = styled.div`
  color: #ff6d6d;
  font-size: 15px;
  margin-right: 370px;
`;

export const blank =  styled.div`
  height: 25px;
`;

// 유틸 버튼
export const VertBtn = styled.button`
  width: 93px;
  height: 49px;
  border-radius: 15px;

  margin: 13px 13px 0 0;

  border: none;
  background-color: #1e1e1e;
  color: #e0e0e0;
  font-size: 17px;

  cursor: pointer;

  :disabled {
    color: gray;
    cursor: default;
  }
`;