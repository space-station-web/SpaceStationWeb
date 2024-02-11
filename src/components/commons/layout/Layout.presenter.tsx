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
      {!(pathName?.includes("boards") || pathName?.includes("search")) && (
        <styled.BackgroundTopImg />
      )}
      <styled.Radial />
      <styled.BackgroundCircle $margin={margin} />
      {!(pathName?.includes("login") || pathName?.includes("signUp")) && (
        <LayoutHeader />
      )}
      <styled.ChildWrapper>{children}</styled.ChildWrapper>
      {pathName?.includes("home") && <styled.Divider />}
      {(pathName?.includes("home") || pathName?.includes("mypage")) && (
        <styled.BackgroundBottomImg />
      )}
    </styled.Background>
  );
}

export default LayoutUI;
