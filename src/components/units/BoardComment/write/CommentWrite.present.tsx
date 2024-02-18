import Lock from "../../../../../public/locked.svg";
import * as L from "./CommentWrite.styled";
import type { onChangeContents } from "./CommentWrite.types";

export default function CommentWriteUI(props: onChangeContents): JSX.Element {
  return (
    <>
      <L.Wrapper>
        <L.WriteForm>
          <L.UserProfile src="/common/profile.png" />
          <L.InputContainer>
            <L.Input onChange={props.onChangeContent} />
            <L.IconContainer>
              <Lock />
            </L.IconContainer>
          </L.InputContainer>
          <L.Submit onClick={props.onClickComment}></L.Submit>
        </L.WriteForm>
      </L.Wrapper>
    </>
  );
}
