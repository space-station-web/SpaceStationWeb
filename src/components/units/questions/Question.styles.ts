import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 200px 50px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prev = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  float: left;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 6.15rem;
  height: 1.9rem;
  border-radius: 999px;
  font-size: 0.76rem;
  background-color: #1e1e1e;
  border: none;
  color: #dcdcdc;
  cursor: pointer;
`;

export const QuestionContainer = styled.div`
  width: 80%;
  height: 29.8rem;
  background-color: #1e1e1e;
  padding: 40px 70px 40px 70px;
  margin-top: 13px;
  border-radius: 20px;
`;

export const Category = styled.div`
  font-size: 0.76rem;
  color: #dcdcdc;
`;

export const QuestionTitle = styled.div`
  font-size: 1.15rem;
  color: #dcdcdc;
  padding: 15px;
  border-bottom: 1px solid #dcdcdc;
`;

export const AnswerText = styled.textarea`
  width: 100%;
  height: 21.1rem;
  margin-top: 13px;
  padding: 15px;
  font-size: 0.69rem;

  background-color: #1e1e1e;
  border: none;

  color: #b4b4b4;
  line-height: 10px;
  resize: none;

  outline: none;
  :focus {
    outline: none;
  }
`;
