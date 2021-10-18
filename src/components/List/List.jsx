import React from "react";
import styled from "styled-components";

const ListStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 80px;
  grid-row-gap: 100px;

  @media (max-width: 1220px) {
    grid-template-columns: auto auto;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-row-gap: 40px;
  }
`;

function List(props) {
  return <ListStyles>{props.children}</ListStyles>;
}

export default List;
