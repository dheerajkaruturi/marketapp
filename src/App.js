import { Fragment } from "react";
import SideNavigation from "./Components/Main/Layout/sideNavigation";
import { MainDesign } from "./Components/MainDesign";

const App = function () {
  return (
    <Fragment>
      <SideNavigation />
      <MainDesign/>
    </Fragment>
  );
};

export default App;
