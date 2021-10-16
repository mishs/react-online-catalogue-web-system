import React, { useContext } from "react";
import styled from "styled-components";
import DealsContext from "../../context/DealsContext";
import CheckBox from "../CheckBox/CheckBox";

const FiltersStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 0.5px solid #d2d2d2;

  .filter {
  }
`;

function Filters(props) {
    const context = useContext(DealsContext)
    const {filters,applyFilter} = context

    return (
    <FiltersStyles>
      <div className="filter tab-content-b">
        {filters && filters.length
          ? filters.map((filter,index) => {
              return (
                <React.Fragment key={index}>
                  <CheckBox title={filter.title} onChange={e=>{
                      applyFilter(e.target.checked,index)
                  }} />
                </React.Fragment>
              );
            })
          : null}
      </div>
    </FiltersStyles>
  );
}

export default Filters;
