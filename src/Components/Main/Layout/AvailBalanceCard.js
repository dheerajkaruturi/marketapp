import React from "react";
import "./AvailBalanceCard.css";

import CardWithDetailsinsideData from "./CardWithDetails_insideData";
import IpoAnnouncement from "./IpoAnnouncement";

const AvailBalanceCard = () => {
  return (
    <div className="row AvailBalance">
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3">
        <CardWithDetailsinsideData
          type="Avial Balance"
          value="₹ 2.32k"
          icon="🪙"
        ></CardWithDetailsinsideData>
      </div>
      <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xxl-9">
        <IpoAnnouncement/>
      </div>
    </div>
  );
};

export default AvailBalanceCard;
