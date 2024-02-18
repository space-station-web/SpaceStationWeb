import { useEffect, useState } from "react";
import * as L from "./BoardDetail.styled";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import BoardModal from "./BoardModal";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  // 글 수정, 글 삭제 모달
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = (): void => {
    setIsModalVisible((prev) => !prev);
  };
  // ------------------------

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

  const firstData = props.data;
  console.log(props.data);

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
              {isModalVisible && <BoardModal onClose={toggleModal} />}
            </L.BookModalContainer>
            {/*  */}
            <L.TopBoard>
              <L.UserBox>
                <L.UserProfile src="/common/icon/User.png" />
                <L.UserName>{firstData?.nickname}</L.UserName>
              </L.UserBox>
              <L.MoreIcon onClick={toggleModal} />
            </L.TopBoard>

            <L.BoardMiddle>
              <L.BoardTopContainer>
                <L.Title>{firstData?.title}</L.Title>
                <L.CreateAt>
                  {formatDate(firstData?.create_at ?? "날짜 정보 없음")}
                </L.CreateAt>
              </L.BoardTopContainer>
              <L.ImageBox
                style={firstData?.image_url ? {} : { display: "none" }}
              >
                {firstData?.image_url?.map((url, index) => (
                  <L.Image key={index} src={url} />
                ))}
              </L.ImageBox>
              <L.Contents>{firstData?.content}</L.Contents>
            </L.BoardMiddle>

            <L.BoardBottom>
              <L.CommentToggle onClick={props.onClickCommentToggle}>
                댓글보기
              </L.CommentToggle>
              <L.IconContainer>
                <L.LikeIcon
                  onClick={props.onClickLike}
                  fill={firstData?.postLike ?? false ? "#ff6f00" : "#8c8c8c"}
                />
                <L.CountLike>{firstData?.postLikeCount}</L.CountLike>
                <L.SaveButton
                  onClick={props.onClickSave}
                  fill={firstData?.storage ?? false ? "#ff6f00" : "none"}
                />
              </L.IconContainer>
            </L.BoardBottom>
          </L.BoardWrapper>
        </L.Wrapper>
      )}
    </>
  );
}
