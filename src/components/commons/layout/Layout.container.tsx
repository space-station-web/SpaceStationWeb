import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import LayoutUI from "./Layout.presenter";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  const pathName = usePathname();

  return <LayoutUI pathName={pathName}>{children}</LayoutUI>;
}

export default Layout;
