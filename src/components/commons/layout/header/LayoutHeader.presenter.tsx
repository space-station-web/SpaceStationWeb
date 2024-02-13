import { useRouter } from "next/router";
import * as Styled from "./LayoutHeader.styles";
import type { ILayoutHeader } from "./LayoutHeader.types";
import Notification from "./Notification.container";

export default function LayoutHeaderUI(props: ILayoutHeader): JSX.Element {
  const router = useRouter();
  return (
    <Styled.Wrapper>
      <img
        src="/logo.svg"
        style={{
          marginRight: 95,
          width: "1.69rem",
          height: "1.69rem",
          cursor: "pointer",
        }}
        onClick={() => {
          void router.push("/");
        }}
      />

      <Styled.NavBar>
        <Styled.NavBarItem>오늘의 질문</Styled.NavBarItem>
        <Styled.NavBarItem>오늘의 글감</Styled.NavBarItem>
        <Styled.NavBarItem>우주 정거장</Styled.NavBarItem>
        <Styled.NavBarItem>책방</Styled.NavBarItem>
        <Styled.NavBarItem>글쓰기</Styled.NavBarItem>
      </Styled.NavBar>
      <Styled.UserBar>
        {props.login ? (
          <>
            <Styled.User>
              <Styled.UserImg />
              <div style={{ color: "#f0f0f0", lineHeight: "31px" }}>허거덩</div>
            </Styled.User>
            <div
              onClick={props.onClickLogout}
              style={{
                width: "45px",
                marginRight: 67,
                color: "#f0f0f0",
                lineHeight: "31px",
                cursor: "pointer",
                fontSize: "0.76rem",
              }}
            >
              로그아웃
            </div>
          </>
        ) : (
          <>
            <Styled.User>
              <div
                onClick={props.onClickLogin}
                style={{
                  width: "45px",
                  color: "#f0f0f0",
                  lineHeight: "31px",
                  cursor: "pointer",
                  fontSize: "0.76rem",
                }}
              >
                로그인
              </div>
            </Styled.User>
            <div
              onClick={props.onClickSignUp}
              style={{
                marginRight: 67,
                color: "#f0f0f0",
                lineHeight: "31px",
                cursor: "pointer",
                fontSize: "0.76rem",
                width: "70px",
              }}
            >
              회원가입
            </div>
          </>
        )}
        <Notification />
        <img src="/common/icon/icon_search.svg" />
      </Styled.UserBar>
    </Styled.Wrapper>
  );
}
