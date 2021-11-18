import React from "react";
import "./CardWithDetails.css";

import CardWithDetailsinsideData from "./CardWithDetails_insideData";

const CardWithDetails = (props) => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
        <CardWithDetailsinsideData
          type="Invested"
          value="₹ 20.32k"
          icon="💰"
        ></CardWithDetailsinsideData>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
        <CardWithDetailsinsideData
          type="Holdings"
          value="14"
          icon="💼"
        ></CardWithDetailsinsideData>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
        <CardWithDetailsinsideData
          type="Profit/Loss"
          value="+200.32 ₹"
          icon="📉"
        ></CardWithDetailsinsideData>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
        <CardWithDetailsinsideData
          type="High Trading"
          value="Tesla"
          icon="🤑"
        ></CardWithDetailsinsideData>
      </div>
    </div>
  );
};

export default CardWithDetails;
