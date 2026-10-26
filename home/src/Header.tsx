/// <reference path="./css.d.ts" />

import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

import "./index.css";

export default function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex justify-between">
        <div className="flex-start">Fidget Spinner World II</div>
        <div className="flex-end ">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
}
