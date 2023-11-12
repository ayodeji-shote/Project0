/* eslint-disable react/jsx-no-undef */
import { Link, Outlet} from "react-router-dom";
import "./Frontpage.css";
import React from "react";
function Frontpage() {
  return (
    <>
    <div className="container custom-container">
      <div className="row custom-row">
        <h1>
          <img
            src={require("../../image/qa.png")}
            className="rounded"
            alt="Logo"
          ></img>
          Real Estate Agent
        </h1>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="property">
            Properties
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="seller">
              Sellers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="buyer">
              Buyers
            </a>
          </li>
        </ul>
      </nav>
    </div><div className="container">
        <Outlet />
      </div>
      </>
  );
}

export default Frontpage;
