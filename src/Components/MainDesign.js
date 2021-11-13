import React from "react";
import "./MainDesign.css";
import CardWithDetails from "./Main/Layout/CardWithDetails";
import WatchList from "./Main/Layout/WatchList";
import AvailBalanceCard from "./Main/Layout/AvailBalanceCard";

export const MainDesign = () => {
  return (
    <section className="p-3">
      <CardWithDetails />
      <WatchList />
      <AvailBalanceCard/>
    </section>
  );
};
