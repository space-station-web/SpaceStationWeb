import { type ReactNode } from "react";
import * as styled from "./Layout.styles";
import LayoutHeader from "./header/LayoutHeader.container";

interface LayoutProps {
  children: ReactNode;
  pathName: string;
}

function LayoutUI({ children, pathName }: LayoutProps): JSX.Element {
  return (
    <styled.Background>
      <styled.BackgroundTopImg />
      <styled.Radial />
      <styled.BackgroundCircle />
      <LayoutHeader />
      {children}
      {pathName?.includes("Home") && <styled.Divider />}
      {pathName?.includes("Home") && <styled.BackgroundBottomImg />}
    </styled.Background>
  );
}

export default LayoutUI;
