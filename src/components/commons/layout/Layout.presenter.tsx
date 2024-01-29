import { useEffect, useState, type ReactNode } from "react";
import * as styled from "./Layout.styles";
import LayoutHeader from "./header/LayoutHeader.container";

interface LayoutProps {
  children: ReactNode;
  pathName: string;
}

function LayoutUI({ children, pathName }: LayoutProps): JSX.Element {
  const [margin, setMargin] = useState("");
  useEffect(() => {
    switch (pathName) {
      case "mypage":
        setMargin("250px");
      default:
        setMargin("667px");
    }
  }, [pathName]);
  return (
    <styled.Background>
      {!pathName.includes("boards") && <styled.BackgroundTopImg />}
      <styled.Radial />
      <styled.BackgroundCircle $margin={margin} />
      <LayoutHeader />
      <styled.ChildWrapper>{children}</styled.ChildWrapper>
      {pathName.includes("home") && <styled.Divider />}
      {pathName.includes("home") ||
        (pathName.includes("mypage") && <styled.BackgroundBottomImg />)}
    </styled.Background>
  );
}

export default LayoutUI;
