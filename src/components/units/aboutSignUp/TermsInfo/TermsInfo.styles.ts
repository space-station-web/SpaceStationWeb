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
  align-items: start;

  margin: 1.9rem 0 11.5rem 0;
  padding: 2.7rem;
`;

export const Title = styled.div`
  width: 25rem;
  font-size: 0.77rem;
  font-weight: 600;
  color: #dcdcdc;
  align-items: center;
  
  text-align: center;
  line-height: 1rem;

  margin-bottom: 1rem;
`;

export const Heading1 = styled.p`
  font-size: 0.77rem;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: left;
  line-height: 1rem;

  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const Body2 = styled.p`
  font-size: 0.65rem;
  font-weight: 300;
  color: #B4B4B4;
  white-space: pre-wrap;
  text-align: left;
  line-height: 1rem
`;

export const br = styled.div`
  height: 0.77;
`;


