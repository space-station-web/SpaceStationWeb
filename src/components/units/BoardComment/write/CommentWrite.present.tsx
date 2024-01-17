import * as L from "./CommentWrite.styled";

export default function CommentWriteUI(): JSX.Element {
  return (
    <>
      <L.Wrapper>
        <L.WriteForm>
          <L.UserProfile src="/common/profile.png" />
          <L.Input />
          <L.Submit />
        </L.WriteForm>
      </L.Wrapper>
    </>
  );
}
