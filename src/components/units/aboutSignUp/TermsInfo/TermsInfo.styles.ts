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
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: start;

  margin: 550px 0 300px 0;
  padding: 70px;
`;

export const Title = styled.div`
  width: 650px;
  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;
  align-items: center;
  
  text-align: center;
  line-height: 23px;

  margin-bottom: 20px;
`;

export const Heading1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: left;
  line-height: 23px;

  margin-bottom: 20px;
`;

export const Body2 = styled.p`
  font-size: 17px;
  font-weight: 300;
  color: #B4B4B4;
  white-space: pre-wrap;
  text-align: left;
  line-height: 24px;
`;

export const br = styled.div`
  height: 20px;
`;


