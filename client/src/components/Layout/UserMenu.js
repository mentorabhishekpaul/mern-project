import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div class="list-group">
        <h1>Dashboard</h1>
        <NavLink
          to="/dashboard/user/profile"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          class="list-group-item list-group-item-action"
        >
          Orders
        </NavLink>
      </div>
    </>
  );
};

export default UserMenu;
