import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import LayoutUI from "./Layout.presenter";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  const pathName = usePathname();
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
    <LayoutUI pathName={pathName} margin={margin}>
      {children}
    </LayoutUI>
  );
}

export default Layout;
