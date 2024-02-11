import { type ReactNode } from "react";
import * as styled from "./Layout.styles";
import LayoutHeader from "./header/LayoutHeader.container";

interface LayoutProps {
  children: ReactNode;
  pathName: string;
  margin: string;
}

function LayoutUI({ children, pathName, margin }: LayoutProps): JSX.Element {
  const safePathName = pathName || "";

  return (
    <styled.Background>
      {!(
        safePathName.includes("boards") || safePathName.includes("search")
      ) && <styled.BackgroundTopImg />}
      <styled.Radial />
      <styled.BackgroundCircle $margin={margin} />
      {!(safePathName.includes("login") || safePathName.includes("signUp")) && (
        <LayoutHeader />
      )}
      <styled.ChildWrapper>{children}</styled.ChildWrapper>
      {safePathName.includes("home") && <styled.Divider />}
      {(safePathName.includes("home") || safePathName.includes("mypage")) && (
        <styled.BackgroundBottomImg />
      )}
    </styled.Background>
  );
}

export default LayoutUI;
