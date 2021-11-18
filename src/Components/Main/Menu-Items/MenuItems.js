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
          <NavLink to="/orders_wishlist" activeclassName="active">Wishlist/Orders</NavLink>
        </li>
        <li>
          <span>Holdings</span>
        </li>
        <li>
          <span>funds</span>
        </li>
        <li>
          <span>commodity</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
