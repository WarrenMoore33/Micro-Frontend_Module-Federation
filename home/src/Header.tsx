/// <reference path="./css.d.ts" />

import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

import "./index.css";

export default function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex justify-between">
        <div className="flex-start">
          <Link to="/">Fidget Spinner World II</Link> |{" "}
          <Link id="cart" to="/cart" className="ml-2">
            Cart
          </Link>
        </div>
        <div className="flex-end ">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
}
