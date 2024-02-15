import { useEffect, useState } from "react";
import * as L from "./BoardDetail.styled";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import BookModal from "./BoardModal";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isStored, setIsStored] = useState<boolean>(false);

  // 글 수정, 글 삭제 모달
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = (): void => {
    setIsModalVisible((prev) => !prev);
  };
  // ------------------------

  useEffect(() => {
    // props로 받은 isStored 상태를 로컬 상태에 반영
    setIsStored(props.isStored);
  }, [props.isStored]);

  const handleSaveButtonClick = async (): Promise<void> => {
    await props.storePost(); // 게시글 보관 API 호출
    setIsStored((prev) => !prev); // 버튼 색상 변경을 위한 상태 업데이트
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 날짜를 'YYYY/MM/DD' 형식으로 변환하는 함수
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString)
      .toLocaleDateString("ko-KR", options)
      .replace(/\.\s/g, "/") // 마침표와 공백을 슬래시로 교체
      .slice(0, -1); // 문자열 끝의 슬래시 제거
  };

  const firstData = props.data?.[0];
  console.log(firstData);

  return (
    <>
      {mounted && (
        <L.Wrapper>
          <L.TopDiv>
            <L.Prev
              src="/common/icon/Arrow 2.png"
              onClick={props.onClickBoards}
            />
            <L.ShareBtn>인용하기</L.ShareBtn>
          </L.TopDiv>
          <L.BoardWrapper>
            {/* modal */}
            <L.BookModalContainer>
              {isModalVisible && <BookModal onClose={toggleModal} />}
            </L.BookModalContainer>
            {/*  */}
            <L.TopBoard>
              <L.UserBox>
                <L.UserProfile src="/common/icon/User.png" />
                <L.UserName>{firstData?.user_id}</L.UserName>
              </L.UserBox>
              <L.MoreIcon onClick={toggleModal} />
            </L.TopBoard>

            <L.BoardMiddle>
              <L.BoardTopContainer>
                <L.Title>{firstData?.title}</L.Title>
                <L.CreateAt>
                  {formatDate(firstData?.created_at ?? "날짜 정보 없음")}
                </L.CreateAt>
              </L.BoardTopContainer>
              <L.ImageBox>
                <L.Image src="/common/exImage.png" />
              </L.ImageBox>
              <L.Contents>{firstData?.content}</L.Contents>
            </L.BoardMiddle>

            <L.BoardBottom>
              <L.CommentToggle onClick={props.onClickCommentToggle}>
                댓글보기
              </L.CommentToggle>
              <L.SaveButton
                onClick={handleSaveButtonClick}
                fill={isStored ? "#ff6f00" : "none"}
              />
            </L.BoardBottom>
          </L.BoardWrapper>
        </L.Wrapper>
      )}
    </>
  );
}
