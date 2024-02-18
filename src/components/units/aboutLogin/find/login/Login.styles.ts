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
  height: 23.1rem;
  border: 0.5px solid #757575;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.9rem 0 11.5rem 0;
  padding: 2.7rem;
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

// 자동로그인 체크박스 및 이메일|비밀번호 찾기
export const UtilForm = styled.div`
  display: flex;
  width: 22.4rem;
  justify-content: space-between;
  margin-top: 0.38rem;
  margin-bottom: 2.3rem;
`;

export const UtilBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  appearance: none;
  border: 1px solid #B4B4B4;
  width: 0.77rem;
  height: 0.77rem;
  margin: 0 0.3rem;
  cursor: pointer;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #FFFFFF;
  }
  
`;

export const UtilText = styled.span`
  color: #BDBDBD;
  font-size: 0.65rem;
  text-align: center;
  margin-right: 0.3rem;
  cursor: pointer;
`;

export const NormText = styled.span`
  color: #BDBDBD;
  font-size: 0.65rem;
  text-align: center;
  margin-right: 0.3rem;
`;

export const SubmitButton = styled.button`
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 0.65rem;
  
  background-color: #0e0e0e;
  color: #e0e0e0;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;

export const Line = styled.div`
  width: 22.4rem;
  border: 0;
  border-top: 1px solid #757575;
  margin: 0.77rem 0;
`;
