import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import SearchUI from "./Search.presenter";

export default function Search(): JSX.Element {
  const router = useRouter();

  const [searchFilter, setSearchFilter] = useState("title");
  const [searchingItem, setSearchingItem] = useState("");
  const onClickTitleFilter = (): void => {
    setSearchFilter("title");
  };

  const onClickAuthorFilter = (): void => {
    setSearchFilter("author");
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchingItem(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter")
      router.push(`/search/searchResult?searchingItem=${searchingItem}`);
  };
  return (
    <SearchUI
      onClickTitleFilter={onClickTitleFilter}
      onClickAuthorFilter={onClickAuthorFilter}
      searchFilter={searchFilter}
      searchingItem={searchingItem}
      handleSearchChange={handleSearchChange}
      handleSubmit={handleSubmit}
    />
  );
}
