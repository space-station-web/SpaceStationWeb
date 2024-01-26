import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-image: url("/common/background.png");
  background-position: top center;

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
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 550px 0 300px 0;
  padding: 70px;

`;

export const Icon = styled.img`
  margin-top: 80px;
  margin-bottom: 60px;
`;

export const Heading1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #DCDCDC;
  white-space: pre-wrap;
  text-align: center;
  line-height: 23px;

  margin-bottom: 10px;
`;

export const Heading2 = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #B4B4B4;
  white-space: pre-wrap;
  text-align: center;
  line-height: 28px;

  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 582px;
  height: 75px;
  border-radius: 20px;
  border: none;

  margin-top: 15px;

  background-color: #0e0e0e;
  color: #e0e0e0;

  cursor: pointer;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
