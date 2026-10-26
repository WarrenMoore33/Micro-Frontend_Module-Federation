import React from "react";

import { login, useLoggedIn } from "./cart";

import "./index.css";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = React.useState(false);

  const [username, setUsername] = React.useState("sally");
  const [password, setPassword] = React.useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-md shadow-lg"
          style={{ width: 300, top: "4rem", right: "70px" }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-2"
          />
          <button
            onClick={(e) => {
              login(username, password);
            }}
            className="bg-green-900 text-white py-2 px-5 rounded-md hover:bg-blue-600"
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
