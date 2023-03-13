import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div class="navbar-container">
      <div className="wrapper">
        <div className="left">
          <img
            className="logo-icon"
            src="https://www.svgrepo.com/show/502840/shopping-bag-1.svg"
            alt=""
            height={35}
            width={35}
          />
          <div className="search-container">
            <input type="text" className="nav-search" />
            <SearchIcon />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">G-Mart</h1>
        </div>
        <div className="right">
          <div className="menu-items">
            <span>REGISTER</span>
            <span>SIGN IN</span>
            <span>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
