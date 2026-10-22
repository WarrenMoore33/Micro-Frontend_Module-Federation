import React, { useEffect, useState } from "react";

import Login from "./Login";
import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Subscribe to the jwt BehaviorSubject to get the latest token value
    const subscription = jwt.subscribe((val) => setToken(val ?? ""));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <div>JWT:</div> {token}
      <Login />
    </div>
  );
}
