import * as L from "./CommentWrite.styled";

export default function CommentWriteUI(): JSX.Element {
  return (
    <>
      <L.Wrapper>
        <L.WriteForm>
          <L.UserProfile src="/common/profile.png" />
          <L.InputContainer>
            <L.Input />
            <L.IconContainer>
              <L.Lock src="/common/icon/unlock.png" />
            </L.IconContainer>
          </L.InputContainer>
          <L.Submit></L.Submit>
        </L.WriteForm>
      </L.Wrapper>
    </>
  );
}
