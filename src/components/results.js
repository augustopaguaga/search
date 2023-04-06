import { useState, useMemo, useEffect } from "react";
import ResultsContainer from "./resultsContainer";
import styled from "styled-components";

const ResultsDiv = styled.div`
  position: absolute;
  width: 400px;
  background: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  margin-top: -3px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;

export default function Results({
  items,
  search,
  changeResults,
  itemSelected,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(
    () => findMatch(items, search),
    [items, search]
  );

  useEffect(() => {
    changeResults(filteredItems);
  }, [results]);

  function findMatch(items, search) {
    const res = items.filter(
      (i) => i.title.toLowerCase().indexOf(search) >= 0 && search !== ""
    );
    setResults(res);
    return res;
  }

  return (
    <ResultsDiv>
      {filteredItems.map((i) => (
        <ResultsContainer
          key={i.id}
          item={i}
          search={search}
          itemSelected={itemSelected}
        />
      ))}
    </ResultsDiv>
  );
}
