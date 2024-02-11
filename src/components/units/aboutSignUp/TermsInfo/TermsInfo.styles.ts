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
  align-items: start;

  margin: 50px 0 300px 0;
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


