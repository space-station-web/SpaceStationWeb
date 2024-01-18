import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-position: top center;
  background-image: url("/common/background.png");

  display: flex;
  justify-content: center;

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
  min-height: 601px;
  border: 0.5px solid #757575;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 550px 0 300px 0;
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

  background-color: #0e0e0e;
  color: #e0e0e0;
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
  margin-left: 15px;
  cursor: pointer;
`;
