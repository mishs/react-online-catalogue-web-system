import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import DealsContext from "../../context/DealsContext";
import Button from "../Button/Button";
import Prices from "../ListItem/Prices";

const OtherDealsStyles = styled.div`
  & > h4 {
    margin-bottom: 20px;
  }
  .title {
    padding: 36px 18px;
    background: #f8f8f8;
    margin-bottom: 20px;
  }

  .deal {
    padding: 22px 18px;
    background: #f8f8f8;
    margin-bottom: 10px;
  }
`;

function OtherDeals(props) {
  const history = useHistory();
  const context = useContext(DealsContext);
  const { dealDetail } = context;
  const [cheaperDeals, setCheaperDeals] = useState([]);

  useEffect(() => {
    if (dealDetail && dealDetail.cheaperStores) {
      setCheaperDeals(dealDetail.cheaperStores);
    }
  }, [dealDetail]);

  return (
    <OtherDealsStyles>
      <h4 className="font-lg font-500">Other deals for this game</h4>
      {cheaperDeals.map((deal) => {
        return (
          <div
            className="deal display-flex h-between v-center"
            key={deal.dealID}
          >
            <div>
              <h4 className="font-md font-500">Steam</h4>
              <Prices
                price={deal.retailPrice}
                salePrice={deal.salePrice}
                isOnSale={deal.salePrice ? true : false}
              />
            </div>
            <Button
              onClick={() => {
                history.push("/deal/" + deal.dealID);
              }}
            >
              View More
            </Button>
          </div>
        );
      })}
    </OtherDealsStyles>
  );
}

export default OtherDeals;
