import BoardItem from "../../../commons/boarditem/BoardItem.container";
import * as styled from "./SearchResult.styles";
import type { SearchResultUIProps } from "./SearchResult.types";
function SearchResultUI({ searchParams }: SearchResultUIProps) {
  const DUMMY = [
    { img: "/common/exImage2.png", author: "자연", title: "나는 살아있다" },
    { img: "/common/exImage.png", author: "콜린", title: "안녕~" },
    {
      img: "/common/exImage3.png",
      author: "lunajazz",
      title: "눈 오는날 듣기 좋은 노래",
    },
    {
      img: "/common/exImage.png",
      author: "소연",
      title: "나는 천재다",
    },
    { img: "/common/exImage4.png", author: "세라", title: "반짝반짝" },
    { img: "/common/exImage6.png", author: "지민", title: "맛있는 간식" },
    { img: "/common/exImage5.png", author: "정국", title: "" },
    { img: "/common/exImage2.png", author: "지은", title: "" },
    { img: "/common/exImage.png", author: "오코", title: "" },
  ];
  return (
    <styled.Wrapper>
      <styled.IconBack />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          marginBottom: 46,
        }}
      >
        <styled.Title>'{searchParams}'에 대한 검색 결과</styled.Title>
        <styled.SubTitle>총 9개의 검색 결과가 있습니다.</styled.SubTitle>
      </div>
      <styled.Results>
        {DUMMY.map((item) => (
          <BoardItem type="writting" writtingItem={item} />
        ))}
      </styled.Results>
    </styled.Wrapper>
  );
}

export default SearchResultUI;
