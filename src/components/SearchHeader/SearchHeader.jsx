import React, { useContext } from "react";
import DealsContext from "../../context/DealsContext";
import SearchInput from "./SearchInput";

function SearchHeader(props) {
  const context = useContext(DealsContext);
  const { filterBySearch } = context;
  return (
    <div className="search-header display-flex h-between">
      <h2 className="font-2xl font-500">Deals</h2>
      <SearchInput
        placeholder="Search deals by name"
        onChange={(e) => filterBySearch(e.target.value)}
      />
    </div>
  );
}

export default SearchHeader;
