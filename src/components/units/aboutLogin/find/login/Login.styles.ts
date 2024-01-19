import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-position: top center;
  background-image: url("/common/background.png");

  display: flex;
  justify-content: center;
  flex-direction: column; 

  position: relative;

  ::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Form = styled.div`
  z-index: 100;
  background-color: #1e1e1e;
  width: 786px;
  height: 601px;
  border: 0.5px solid #757575;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 550px 0 300px 0;
  padding: 70px;
`;

export const InputTextForm = styled.div`
  display: flex;
  width: 582px;
  height: 75px;
  border-radius: 20px;

  background-color: #141414;

  margin-bottom: 15px;
`;

export const TitleText = styled.p`
  color: #bdbdbd;
  font-size: 17px;
  width: 100px;
  text-align: center;
  line-height: 75px;
`;

export const Input = styled.input`
  width: 450px;
  background-color: #141414;
  border: none;
  :focus {
    outline: none;
  }
  color: #e0e0e0;
  caret-color: #e0e0e0;
  font-size: 17px;
`;

// 자동로그인 체크박스 및 이메일|비밀번호 찾기
export const UtilForm = styled.div`
  display: flex;
  width: 582px;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const UtilBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  appearance: none;
  border: 1px solid #B4B4B4;
  width: 20px;
  height: 20px;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #FFFFFF;
  }
  
`;

export const UtilText = styled.span`
  color: #BDBDBD;
  font-size: 17px;
  text-align: center;
  margin-left: 5px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 582px;
  height: 75px;
  border-radius: 20px;
  border: none;

  

  background-color: #0e0e0e;
  color: #e0e0e0;
`;

export const Line = styled.div`
  width: 582px;
  border: 0;
  border-top: 1px solid #757575;
  margin: 20px 0;
`;
