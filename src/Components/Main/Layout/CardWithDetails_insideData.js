import React from "react";
import Card from "../Card/Card";
import "./CardWithDetails_insideData.css"

const CardWithDetailsinsideData = (props) => {
  return (
    <Card>
      <div className="card-card_info">
        <h2 className="card_info_Type">
          {props.type} <b className="mt-2">{props.value}</b>
        </h2>
              <span className="card_info_icon">{props.icon}</span>
      </div>
    </Card>
  );
};

export default CardWithDetailsinsideData;
