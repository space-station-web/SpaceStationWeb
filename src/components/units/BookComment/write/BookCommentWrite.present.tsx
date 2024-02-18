import Lock from "../../../../../public/locked.svg";
import * as L from "./BookCommentWrite.styled";
import type { onChangeContents } from "./BookCommentWrite.types";

export default function BookCommentWriteUI(
  props: onChangeContents,
): JSX.Element {
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
          <L.Submit onClick={props.onClickComment}>
            <img src="/boardComment/submit.svg" />
          </L.Submit>
        </L.WriteForm>
      </L.Wrapper>
    </>
  );
}
