import * as L from "./CommentWrite.styled";
import Lock from "../../../../../public/locked.svg";

export default function CommentWriteUI(): JSX.Element {
  return (
    <>
      <L.Wrapper>
        <L.WriteForm>
          <L.UserProfile src="/common/profile.png" />
          <L.InputContainer>
            <L.Input />
            <L.IconContainer>
              <Lock />
            </L.IconContainer>
          </L.InputContainer>
          <L.Submit></L.Submit>
        </L.WriteForm>
      </L.Wrapper>
    </>
  );
}
