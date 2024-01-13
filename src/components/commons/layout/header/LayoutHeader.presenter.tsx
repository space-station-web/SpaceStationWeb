import * as L from "./LayoutHeader.styles";

export default function LayoutHeaderUI(): JSX.Element {
  return (
    <L.Wrapper>
      <L.UserIcon src="/common/icon/User.png" />
      <L.Text>허거덩님</L.Text>
      <L.Text>마이페이지 </L.Text>
      <L.Icon src="/common/icon/alarm.png" />
      <L.Icon src="/common/icon/list.png" />
    </L.Wrapper>
  );
}
