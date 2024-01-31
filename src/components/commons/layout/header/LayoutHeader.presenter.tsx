import * as Styled from "./LayoutHeader.styles";
import Notification from "./Notification.container";
import type { ILayoutHeader } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeader): JSX.Element {
  return (
    <Styled.Wrapper>
      <div style={{ marginRight: 95 }}>로고</div>

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
              <div onClick={props.onClickLogout} style={{ marginRight: 67, color: "#f0f0f0", lineHeight: "31px", cursor: "pointer" }}>
                로그아웃
              </div>
            </>
          ) : (
            <>
              <Styled.User>
                <div onClick={props.onClickLogin} style={{ color: "#f0f0f0", lineHeight: "31px", cursor: "pointer" }}>로그인</div>
              </Styled.User>
              <div onClick={props.onClickSignUp} style={{ marginRight: 67, color: "#f0f0f0", lineHeight: "31px", cursor: "pointer" }}>
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
