import React from "react";
import ReactDOM from "react-dom/client";

import "remixicon/fonts/remixicon.css";

import "./index.css";

import MainLayout  from "./MainLayout";


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<MainLayout />);
