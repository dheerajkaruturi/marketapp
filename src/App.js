import { Fragment } from "react";
import AddFunds from "./Components/AddingFunds/AddFunds";
import { Route, Redirect } from "react-router-dom";
import SideNavigation from "./Components/Main/Layout/sideNavigation";
import TopBar from "./Components/Main/Layout/TopBar";
import { MainDesign } from "./Components/MainDesign";
import WishlistItem from "./Components/Orders_and_wishlistFolder/WishlistItems";
import HoldingsDetails from "./Components/Holdings/HoldingsDetails";

const App = function () {
  return (
    <Fragment>
      <SideNavigation />

      <TopBar />

      <Route path="">
        <Redirect to="/dashboard" />
      </Route>

      <Route path="/dashboard">
        <MainDesign />
      </Route>

      <Route path="/orders_wishlist">
        <WishlistItem />
      </Route>

      <Route path="/holdings">
        <HoldingsDetails />
      </Route>

      <Route path='/funds'>
        <AddFunds />
      </Route>
    </Fragment>
  );
};

export default App;
