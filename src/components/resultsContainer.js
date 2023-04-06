import { useState, useMemo } from "react";
import styled from "styled-components";

const StyledMarker = styled.span`
  background-color: yellow;
  font-weight: bolder;
  border-radius: 2px;
`;

const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #4c91ba;
    color: white;
  }
  &:hover span {
    color: black;
  }
`;

export default function ResultsContainer({ item, search, itemSelected }) {
  const { left, right, center } = useMemo(
    () => markedItem(item, search),
    [item, search]
  );

  function markedItem(item, search) {
    const index = item.title.toLowerCase().indexOf(search);
    const left = item.title.slice(0, index);
    const center = item.title.slice(index, index + search.length);
    const right = item.title.slice(index + search.length);

    return { left, center, right };
  }

  function onItemSelected() {
    const value = left + center + right;
    itemSelected(value);
  }

  return (
    <div>
      <StyledItem onClick={onItemSelected}>
        {left}
        <StyledMarker style={{ backgroundColor: "yellow" }}>
          {center}
        </StyledMarker>
        {right}
      </StyledItem>
    </div>
  );
}
