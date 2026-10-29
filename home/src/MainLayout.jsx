import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import "./index.css";

import Header from "./Header";
import Footer from "./Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "./HomeContent";
import CartContent from "cart/CartContent";

function RoutedPDPContent() {
  const { id } = useParams();
  return <PDPContent id={id} />;
}

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route exact path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<RoutedPDPContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
