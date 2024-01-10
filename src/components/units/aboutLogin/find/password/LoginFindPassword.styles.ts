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
  height: 601px;
  border: 0.5px solid #757575;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 550px 0 300px 0;
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

export const SubmitButton = styled.button`
  width: 582px;
  height: 75px;
  border-radius: 20px;
  border: none;

  margin-top: 40px;

  background-color: #0e0e0e;
  color: #e0e0e0;
`;
