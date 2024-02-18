// ModalComponent.jsx
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
interface ModalComponentProps {
  onClose: () => void;
}

const BookModal = ({ onClose }: ModalComponentProps): JSX.Element => {
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

  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwODA2MDM4MSwiZXhwIjoxNzA4MDcxMTgxfQ.DN6JNIW9Qep8BYUbI7d3Ib0eSLZzmD_pY6SY57F6rDc";
  const accessToken =
    "Bearer " +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgwNjAzODEsImV4cCI6MTcwODE0Njc4MX0.kvb5RU3ZQD5qkx0mEm-5SCcUNModY3W6akrhI8g-iwg";

  // 게시글 삭제 로직을 수행하는 함수
  const router = useRouter();
  const { post_id: postId } = router.query;

  const onClickDelete = async (): Promise<void> => {
    // postId가 문자열인지 확인
    if (typeof postId === "string") {
      try {
        const response = await axios.delete(
          `http://localhost:8080/posts/${postId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
              Refresh: refreshToken,
            },
          },
        );

        // 요청이 성공적으로 완료되었음을 알림
        alert("게시글이 삭제되었습니다.");
        onClose(); // 게시글 삭제 후 모달 닫기
        void router.push("/boards");
        console.log(response);

        // void router.push("/boards");
      } catch (error) {
        console.error("게시글 삭제 중 오류가 발생했습니다.", error);
        alert("게시글 삭제 중 오류가 발생했습니다.");
      }
    } else {
      // postId가 문자열이 아닌 경우의 처리
      console.error("Invalid postId:", postId);
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
