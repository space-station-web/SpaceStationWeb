// ModalComponent.jsx
import { useRouter } from "next/router";
import styled from "styled-components";
interface ModalComponentProps {
  onClose: () => void;
}

const ModalComponent = ({ onClose }: ModalComponentProps): JSX.Element => {
  const router = useRouter();
  return (
    <ModalBackground>
      <ModalContainer>
        <Image src="/common/exit.svg" onClick={onClose} />
        <Text>책을 등록하시겠습니까?</Text>
        <Button
          onClick={() => {
            void router.push("/books/write");
          }}
        >
          새로 등록하기
        </Button>
        <Button
          onClick={() => {
            void router.push("/books/tempBook");
          }}
        >
          기존 글 불러오기
        </Button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalComponent;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 14rem;
  height: 13.8rem;
`;

const Image = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 93%;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 0.78rem;
  text-align: center;
  margin-bottom: 30px;
`;

const Button = styled.div`
  width: 11.1rem;
  height: 2.3rem;
  background-color: #1e1e1e;
  border-radius: 20px;

  font-size: 0.76rem;
  color: #dcdcdc;
  text-align: center;
  line-height: 2.3rem;
  cursor: pointer;
`;
