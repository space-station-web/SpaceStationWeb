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
  height: 601px;
  border: 0.5px solid #757575;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px 0 300px 0;
  padding: 70px;
`;

export const Icon = styled.img`
  margin-bottom: 60px;
`;

export const Heading1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: center;
  line-height: 23px;

  margin-bottom: 10px;
`;

export const Heading2 = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #b4b4b4;
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
