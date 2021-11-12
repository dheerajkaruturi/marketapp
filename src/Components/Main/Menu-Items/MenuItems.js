import React from "react";
import "./MenuItems.css";

const MenuItems = () => {
  return (
    <div>
      <ul className="menuItems-nav_list">
        <li>
          <span className="active">Dashboard</span>
        </li>
        <li>
          <span>Wishlist/Orders</span>
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
