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

export const Heading1 = styled.p`
  font-size: 0.77rem;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: center;
  line-height: 0.88rem;

  margin-bottom: 0.38rem;
`;

export const InputTextForm = styled.div`
  display: flex;
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;

  background-color: #141414;

  margin: 0.27rem 0;
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

export const SubmitButton = styled.button`
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 0.65rem;
  margin-top: 0.38rem;

  background-color: #0e0e0e;
  color: #e0e0e0;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;

export const UtilBox = styled.div`
  width: 21.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.77rem;
`;

export const CheckBox = styled.input`
  appearance: none;
  border: 1px solid #8c8c8c;
  width: 0.77rem;
  height: 0.77rem;
  cursor: pointer;
  margin-left: 0.15rem;
  margin-right: 0.56rem;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #ffffff;
  }
`;

export const UtilText = styled.span`
  color: #8c8c8c;
  font-size: 0.56rem;
  line-height: 0.69rem;
  text-align: center;
  margin-left: 0.19rem;
  cursor: pointer;
  text-decoration: underline;
`;

export const NormText = styled.span`
  color: #8c8c8c;
  font-size: 0.56rem;
  line-height: 0.69rem;
  text-align: center;
  
`;

export const ErrorMessage = styled.div`
  color: #ff6d6d;
  font-size: 0.57rem;
  width: 21.9rem;
  margin-bottom: 0.5rem;
`;


export const ErrorMessage1 = styled.small`
  color: red;
  text-align: left;
  display: block;
  margin-bottom: 0.38rem;
  margin-left: 5.77rem;
  font-size: 0.57rem;
`;

export const blank =  styled.div`
  height: 1rem;
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