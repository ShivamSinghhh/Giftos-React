import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Usercontext } from "../context/Usercontext";

export const Navbar = () => {
  const { setData } = useContext(Usercontext);

  const [flagToggle, setFlagToggle] = useState(false);

  const handleToggle = () => {
    setFlagToggle(!flagToggle);
  };

  let loggedIn = JSON.parse(localStorage.getItem("currentUser")) || false;

  // console.log("logged condition :",loggedIn)
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setData({
      username: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <>
      <div className="navbar">
        <ul id="menuItems" className={flagToggle ? "toggleOn" : "toggleOff"}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              SHOP
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/whyus"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              WHY US
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/testinomial"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              TESTINOMIAL
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              CONTACT US
            </NavLink>
          </li>

          {loggedIn && (
            <li>
              <NavLink
                to="/"
                id="userAccount"
                style={{
                  color: "#f89cab",
                  fontSize: "18px",
                  className: "inactive",
                }}
              >
                {loggedIn.username}
              </NavLink>
            </li>
          )}
          {!loggedIn && (
            <li>
              <NavLink
                to="/login"
                id="userAccount"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                LOGIN
              </NavLink>
            </li>
          )}

          {loggedIn && (
            <li onClick={handleLogout}>
              <Link to="/" id="logout">
                LOGOUT
              </Link>
            </li>
          )}

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {" "}
              <img src="./images/cart.png" id="cartLogo" alt="cart" />
            </NavLink>
          </li>
          <li>
            <input type="text" placeholder="search" />
          </li>
        </ul>
        <div>
          <img
            src="./images/menu.png"
            alt=""
            className="menu-icon"
            id="menutoggle"
            onClick={handleToggle}
          />
        </div>
      </div>
    </>
  );
};
