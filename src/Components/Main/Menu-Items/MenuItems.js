import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuItems.css";

const MenuItems = () => {
  return (
    <div>
      <ul className="menuItems-nav_list">
        <li>
          <NavLink to="/dashboard" activeclassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders_wishlist" activeclassName="active">
            Wishlist/Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/holdings" activeClassName="active">
            Holdings
          </NavLink>
        </li>
        <li>
          <NavLink to="/funds" activeClassName="active">
            Add Money
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
