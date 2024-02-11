import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  width: 66.6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 0 60px 0;
`;

export const SubmitBtn = styled.button`
  width: 160px;
  height: 50px;
  background-color: #1e1e1e;
  border-radius: 999px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

export const TopContainer = styled.div`
  width: 66.6%;
  height: 497px;
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 65px;

  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  width: 288px;
  height: 370px;
  border: 2px solid #dcdcdc;
  border-radius: 20px;
`;

export const BookIntroContainer = styled.div`
  width: 65%;
  margin-left: 130px;

  display: flex;
  flex-direction: column;
`;

export const BookIntroInput = styled.textarea`
  width: 100%;
  height: 186px;
  background-color: #141414;
  border: none;
  border-radius: 20px;
  color: #8c8c8c;
  padding: 20px;
  font-size: 20px;

  margin-top: 15px;

  :focus {
    outline: none;
  }
`;

export const BookTitleInput = styled.input`
  padding: 20px;
  height: 55px;
  background-color: #1e1e1e;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  color: #8c8c8c;

  margin-bottom: 90px;

  :focus {
    outline: none;
  }
`;

export const CategoryContainer = styled.div`
  margin-top: 18px;
  width: 66.6%;
  height: 136px;
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 35px 80px 35px 80px;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: #f0f0f0;
  font-size: 20px;
`;

export const CategoryItemDiv = styled.div`
  height: 100%;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryBtn = styled.div`
  width: 88px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #dcdcdc;
  background-color: #1e1e1e;
  text-align: center;
  line-height: 32px;
  color: #dcdcdc;
  font-size: 18px;
  cursor: pointer;
`;

export const ContentsContainer = styled.div``;
