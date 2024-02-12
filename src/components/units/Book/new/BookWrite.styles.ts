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
  padding: 60px 0 30px 0;
`;

export const SubmitBtn = styled.button`
  width: 6.15rem;
  height: 1.9rem;
  background-color: #1e1e1e;
  border-radius: 999px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.769rem;
`;

export const TopContainer = styled.div`
  width: 66.6%;
  height: 19.11rem;
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 45px;

  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  width: 11rem;
  height: 14.2rem;
  border: 2px solid #dcdcdc;
  border-radius: 20px;
`;

export const BookIntroContainer = styled.div`
  width: 65%;
  margin-left: 60px;

  display: flex;
  flex-direction: column;
`;

export const BookIntroInput = styled.textarea`
  width: 100%;
  height: 7.1rem;
  background-color: #141414;
  border: none;
  border-radius: 20px;
  color: #8c8c8c;
  padding: 20px;
  font-size: 0.769rem;

  margin-top: 15px;
  outline: none;
  resize: none;

  :focus {
    outline: none;
  }
`;

export const BookTitleInput = styled.input`
  padding: 20px;
  height: 2.11rem;
  background-color: #1e1e1e;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  color: #8c8c8c;

  margin-bottom: 90px;
  outline: none;

  :focus {
    outline: none;
  }
`;

export const CategoryContainer = styled.div`
  margin-top: 18px;
  width: 66.6%;
  height: 5.21rem;
  background-color: #1e1e1e;
  border-radius: 19px;
  padding: 27px 80px 20px 80px;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: #f0f0f0;
  font-size: 0.769rem;
`;

export const CategoryItemDiv = styled.div`
  height: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryBtn = styled.div`
  width: 3.3rem;
  height: 1.2rem;
  border-radius: 16px;
  border: 1px solid #dcdcdc;
  background-color: #1e1e1e;
  text-align: center;
  line-height: 1.2rem;
  color: #dcdcdc;
  font-size: 0.69rem;
  cursor: pointer;
`;

export const TableContainer = styled.div`
  width: 66.6%;
  background-color: #1e1e1e;

  margin-top: 18px;
  border-radius: 20px;
  padding: 50px 80px 50px 80px;
`;

export const Table = styled.div`
  width: 100%;
  font-size: 1.15rem;
  color: #f0f0f0;

  margin-bottom: 18px;
`;

export const TableContentsContainer = styled.div`
  padding: 35px 35px 15px 35px;

  border-top: 1px solid #8c8c8c;
  border-bottom: 1px solid #8c8c8c;
`;

export const TableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TableText = styled.div`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #dcdcdc;
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 29px;
  cursor: pointer;
  color: #8c8c8c;
  background-color: #1e1e1e;
  border: none;
`;

export const AddTableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  margin-top: 20px;
  cursor: pointer;
`;

export const Add = styled.div`
  font-size: 0.769rem;
  color: #dcdcdc;
  margin-left: 10px;
`;

export const ContentsContainer = styled.div`
  margin-top: 18px;
  border-radius: 20px;
  width: 66.6%;

  background-color: #1e1e1e;
  padding: 40px;
`;

export const ContentsImageContainer = styled.div`
  width: 100%;
  height: 14.2rem;
  background-color: #8c8c8c;
  border-radius: 20px;
`;

export const BookContents = styled.textarea`
  width: 100%;
  height: 22.2rem;
  margin-top: 35px;
  padding: 10.1px;

  background-color: #1e1e1e;
  border: none;
  outline: none;
  resize: none;
  width: 100%;

  font-size: 0.69rem;
  color: #b4b4b4;
  line-height: 27px;

  :focus {
    outline: none;
  }
`;

// ModalContainer

export const ModalContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #141414;
  border-radius: 20px;
  padding: 20px;
  z-index: 10;
`;

export const NumberInput = styled.input`
  width: 10%;
  height: 2.2rem;
  background-color: #1e1e1e;

  border: none;
  outline: none;
  border-radius: 10px;
  color: #dcdcdc;
  text-align: center;
  margin-right: 10px;
  font-size: 0.69rem;
  padding: 0 8px 0 8px;
`;

export const ContentsInput = styled.input`
  width: 53%;
  height: 2.2rem;
  background-color: #1e1e1e;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #dcdcdc;
  font-size: 0.69rem;
  padding: 0 8px 0 8px;
`;

export const TableAddBtn = styled.button`
  width: 15%;
  height: 2.2rem;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #1e1e1e;
  border: none;
  color: #dcdcdc;

  font-size: 0.69rem;
`;
