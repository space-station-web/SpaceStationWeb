// ModalComponent.jsx
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
interface ModalComponentProps {
  onClose: () => void;
}

const BookModal = ({ onClose }: ModalComponentProps): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  // 모달 바깥 클릭을 감지하는 핸들러
  const handleOutsideClick = (e: MouseEvent): void => {
    // 모달 컨테이너(ref)가 이벤트의 대상이 아닌 경우 onClose 실행
    if (
      modalRef.current !== null &&
      !modalRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  // 모달에 대한 참조 생성
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 추가
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시 한 번만 실행되게 함

  const onClickUpdate = (): void => {
    alert("미완성");
  };

  // 게시글 삭제 로직을 수행하는 함수
  const router = useRouter();
  const { bookId } = router.query;

  const onClickDelete = async (): Promise<void> => {
    // bookId가 문자열인지 확인

    if (typeof bookId === "string") {
      try {
        const response = await axios.delete(
          `http://localhost:8080/books/${bookId}`,
          {
            headers: {
              Authorization: accessToken,
              refresh: refreshToken,
            },
          },
        );
        console.log(response.data);
        // 요청이 성공적으로 완료되었음을 알림
        alert(response.data.result.data.message);
        void router.push("/boards");
        onClose(); // 게시글 삭제 후 모달 닫기

        // void router.push("/boards");
      } catch (error) {
        console.error("게시글 삭제 중 오류가 발생했습니다.", error);
        alert("게시글 삭제 중 오류가 발생했습니다.");
      }
    } else {
      // bookId가 문자열이 아닌 경우의 처리
      console.error("Invalid bookId:", bookId);
      alert("유효하지 않은 게시글 ID입니다.");
    }
  };

  return (
    <ModalContainer ref={modalRef}>
      <Button onClick={onClickUpdate}>수정하기</Button>
      <Button onClick={onClickDelete}>삭제하기</Button>
    </ModalContainer>
  );
};

export default BookModal;

const ModalContainer = styled.div`
  background: #141414;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  width: 4.7rem;
  height: 4rem;
  z-index: 3000;
`;

const Button = styled.div`
  width: 100%;
  height: 2rem;

  border-bottom: 1px solid black;

  font-size: 0.65rem;
  color: #b4b4b4;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
`;
