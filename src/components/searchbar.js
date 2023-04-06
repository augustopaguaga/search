import { useState } from "react";
import Results from "./results";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  min-width: 400px;
  box-sizing: border-box;
  border: solid 1px #222;
  outline: none;
`;

export default function SearchBar({ items, itemSelected }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [results, setResults] = useState("");
  const [Selected, setSelected] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSearch(value);
  }

  function changeResults(results) {
    setResults(results);
  }

  return (
    <div>
      <SearchBarContainer>
        {results && <div>{results.length} results</div>}
        <StyledInput
          autoComplete="none"
          type="text"
          value={search}
          onChange={handleChange}
        ></StyledInput>
        <Results
          items={items}
          search={search}
          changeResults={changeResults}
          itemSelected={itemSelected}
        />
      </SearchBarContainer>
    </div>
  );
}
