import React from "react";
import "./MainDesign.css";

// dashboard components
// import CardWithDetails from "./Main/Layout/CardWithDetails";
// import WatchList from "./Main/Layout/WatchList";
// import AvailBalanceCard from "./Main/Layout/AvailBalanceCard";

// orders and wishlist components
import WishlistItems from "./Orders_and_wishlistFolder/WishlistItems";

export const MainDesign = () => {
  return (
    <section className="p-3">
      {/* <div>
        <CardWithDetails />
        <WatchList />
        <AvailBalanceCard />
      </div> */}
      <WishlistItems />
    </section>
  );
};
