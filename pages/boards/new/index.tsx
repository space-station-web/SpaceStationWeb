import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.container";
import BoardWrite from "../../../src/components/units/Board/write/BoardWrite.container";

// BoardWrite
export default function BoardWritePage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <BoardWrite />;
    </>
  );
}
