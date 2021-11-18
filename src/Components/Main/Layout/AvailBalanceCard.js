import React from "react";
import "./AvailBalanceCard.css";

import CardWithDetailsinsideData from "./CardWithDetails_insideData";
import IpoAnnouncement from "./IpoAnnouncement";

const AvailBalanceCard = () => {
  return (
    <div className="row AvailBalance">
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
        <CardWithDetailsinsideData
          type="Avial Balance"
          value="₹ 2.32k"
          icon="🪙"
        ></CardWithDetailsinsideData>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-9 col-xxl-9">
        <IpoAnnouncement />
      </div>
    </div>
  );
};

export default AvailBalanceCard;
