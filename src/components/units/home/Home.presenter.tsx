import { useRouter } from "next/router";
import * as styled from "./Home.styles";
import type { HomeProps } from "./Home.types";

function HomeUI({
  onClickMoveLogin,
  onClickMoveWrite,
}: HomeProps): JSX.Element {
  const router = useRouter();
  return (
    <styled.Wrapper>
      <styled.Stack style={{ marginTop: 260, alignItems: "center" }}>
        <div style={{ color: "#f7f7f7", fontSize: "1.15rem" }}>
          나의 생각이 정착할
        </div>
        <div style={{ color: "#f7f7f7", fontSize: "2.11rem" }}>우주 정거장</div>
        <div style={{ color: "#f7f7f7", fontSize: "0.56rem" }}>
          2024 Space Station
        </div>
      </styled.Stack>
      <styled.Stack
        $gap="9.42rem"
        style={{ alignItems: "center", marginTop: 57 }}
      >
        <styled.Group $gap="0.84rem">
          <styled.LoginBtn
            onClick={() => {
              void router.push("/sighUp");
            }}
          >
            가입
          </styled.LoginBtn>
          <styled.LoginBtn onClick={onClickMoveLogin}>로그인</styled.LoginBtn>
        </styled.Group>
        <styled.Stack $gap="1.1rem">
          <styled.Group $gap="1.1rem">
            <styled.Card $width="30.2rem" $height="14.2rem">
              <styled.Stack $gap="0.34rem">
                <styled.SubTitle>오늘의 글감</styled.SubTitle>
                <styled.Title>몰입</styled.Title>
                <styled.SubBody style={{ marginTop: 26, width: "11.9rem" }}>
                  너무 어렵게 생각하지마요.
                  <br /> 몰입은 무언가에 빠지는 것. 무게가 어떻든
                  <br /> 당신이 좋아하고 있는 걸 써내려가면 될 거예요.
                </styled.SubBody>
              </styled.Stack>
              <styled.Group $gap="0.65rem" style={{ alignSelf: "flex-end" }}>
                <styled.ContentsBtn>모음집 확인</styled.ContentsBtn>
                <styled.ContentsBtn>작성하기</styled.ContentsBtn>
              </styled.Group>
            </styled.Card>
            <styled.Card $width="14.5rem" $height="14.2rem">
              <styled.Stack $gap="9px">
                <styled.SubTitle>나도 한번 써볼까?</styled.SubTitle>
                <styled.Title>기록지</styled.Title>
              </styled.Stack>
              <styled.ContentsBtn
                onClick={onClickMoveWrite}
                style={{ alignSelf: "flex-end" }}
              >
                작성하기
              </styled.ContentsBtn>
            </styled.Card>
          </styled.Group>
          <styled.Group $gap="30px">
            <styled.Card $width="14.53rem" $height="14.2rem">
              <styled.Stack $gap="9px">
                <styled.SubTitle>다른 사람은 어떤 생각을 할까?</styled.SubTitle>
                <styled.Title>우주 정거장</styled.Title>
              </styled.Stack>
              <styled.ContentsBtn
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  void router.push("/boards");
                }}
              >
                보러가기
              </styled.ContentsBtn>
            </styled.Card>
            <styled.Card $width="30.2rem" $height="14.2rem">
              <styled.Stack $gap="9px">
                <styled.SubTitle>오늘의 질문</styled.SubTitle>
                <styled.Title

                // style={{ filter: `blur(5px)`, userSelect: "none" }}
                >
                  제일 좋아하는 과일은 무엇인가요?
                </styled.Title>
                {/* <styled.Balloon
                  style={{ fontSize: "0.654rem", color: "#bdbdbd" }}
                >
                  로그인/회원가입을 하시면 오늘의 질문을 볼 수 있어요 !
                </styled.Balloon> */}
              </styled.Stack>
              <styled.ContentsBtn
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  void router.push("/questions");
                }}
              >
                답변하기
              </styled.ContentsBtn>
            </styled.Card>
          </styled.Group>
          <styled.Group $gap="30px">
            <styled.Card $width="30.2rem" $height="14.2rem">
              <styled.Stack $gap="9px">
                <styled.SubTitle>다른 작가님들의</styled.SubTitle>
                <styled.Title>책방</styled.Title>
              </styled.Stack>
              <styled.ContentsBtn
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  void router.push("/books");
                }}
              >
                보러가기
              </styled.ContentsBtn>
            </styled.Card>
            <styled.Card $width="14.5rem" $height="14.2rem">
              <styled.Stack $gap="9px">
                <styled.SubTitle>나도 작가에 도전해볼까?</styled.SubTitle>
                <styled.Title>책 등록하기</styled.Title>
              </styled.Stack>
              <styled.ContentsBtn
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  void router.push("/books/write");
                }}
              >
                작성하기
              </styled.ContentsBtn>
            </styled.Card>
          </styled.Group>
        </styled.Stack>
      </styled.Stack>
    </styled.Wrapper>
  );
}

export default HomeUI;
