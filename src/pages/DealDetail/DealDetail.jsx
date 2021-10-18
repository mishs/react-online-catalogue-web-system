import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Detail from "../../components/Detail/Detail";
import OtherDeals from "../../components/OtherDeals/OtherDeals";
import DealsContext from "../../context/DealsContext";

function DealDetail(props) {
  const context = useContext(DealsContext);
  const { dealDetail, getDealDetail } = context;
  const params = useParams();
  const [dealId, setDealId] = useState(null);

  useEffect(() => {
    if (dealId !== params.id) {
      setDealId(params.id);
      getDealDetail(params.id);
    }
  }, [params.id, getDealDetail, dealId]);

  return (
    <div className="deal-detail_container display-flex h-between">
      {dealDetail ? (
        <>
          <div className="deal-details-left">
            <Detail
              thumbnail={dealDetail.gameInfo.thumb}
              title={dealDetail.gameInfo.name}
              shopName={dealDetail.gameInfo.publisher}
              price={dealDetail.gameInfo.retailPrice}
              salePrice={dealDetail.gameInfo.salePrice}
              isOnSale={dealDetail.gameInfo.salePrice ? true : false}
            />
          </div>
          <div className="deal-details-right">
            <OtherDeals otherDeals={dealDetail.cheaperStores} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default DealDetail;
