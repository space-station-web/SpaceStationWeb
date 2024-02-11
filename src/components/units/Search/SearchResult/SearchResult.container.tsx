import { useSearchParams } from "next/navigation";
import SearchResultUI from "./SearchResult.presenter";

function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get("searchingItem");

  return <SearchResultUI searchParams={search as string} />;
}

export default SearchResult;
