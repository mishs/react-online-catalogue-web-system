import React from "react";
import styled from "styled-components";

const PricesStyle = styled.div`
  .cut {
    text-decoration: line-through;
  }
  .sale-price {
    margin-left: 20px;
    color: #14a38b;
  }
`;

function Prices(props) {
  return (
    <PricesStyle className="prices_container display-flex v-center">
      <h4
        className={`price ${
          props.fontSize ? props.fontSize : "font-600 font-xs"
        } ${props.isOnSale ? "cut" : ""}`}
      >
        ${props.price}
      </h4>
      {props.isOnSale ? (
        <h4
          className={`sale-price ${
            props.fontSize ? props.fontSize : "font-600 font-xs"
          }`}
        >
          ${props.salePrice}
        </h4>
      ) : null}
    </PricesStyle>
  );
}

export default Prices;
