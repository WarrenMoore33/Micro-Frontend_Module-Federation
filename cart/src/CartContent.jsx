import React, { useEffect, useState } from "react";

import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const subscription = jwt.subscribe((val) => setToken(val ?? ""));
    login("sally", "123");
    return () => subscription.unsubscribe();
  }, []);

  return <div>JWT: {token}</div>;
}
