import React, { useState } from "react";
import styled from "styled-components";
import down from "../../assets/icons/downIcon.png";

const TabStyles = styled.div`

.tab-detail{
    margin-bottom: 50px;
    .tab-title {
      color: #2c2738;
    }
    img {
      cursor: pointer;
    }
}
  .tab-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);

    &.tab-active {
      max-height: 1000px;
      transition: max-height 1s ease-in-out;
    }
  }
`;

function Tab(props) {
  const [tab, setTab] = useState(false);
  return (
    <TabStyles>
      <div className="tab-detail display-flex v-center h-between">
        <h4 className="tab-title font-xl font-400">{props.title}</h4>
        <img src={down} alt="" onClick={() => setTab(!tab)} />
      </div>
      <div className={`tab-content ${tab ? "tab-active" : ""}`}>
        {props.content}
      </div>
    </TabStyles>
  );
}

export default Tab;
