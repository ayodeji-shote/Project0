/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import "./Frontpage.css";
import React from "react";
function FrontPage() {
  return (
    <div class="container custom-container">
      <div class="row custom-row">
        <h1>
          <img
            src={require("../../image/qa.png")}
            class="rounded"
            alt="Logo"
          ></img>
          Real Estate Agent
        </h1>
      </div>
      <nav class="navbar navbar-expand-lg ">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Properties <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sellers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Buyers
              </a>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default FrontPage;
