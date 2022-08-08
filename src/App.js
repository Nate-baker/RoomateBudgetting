import React, { useEffect, useInsertionEffect } from "react";
import { Component } from "react";
import "./styles.css";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  const [user, setUser] = React.useState();
  const [page, setPage] = React.useState();

  useEffect(() => {
    setPage(<Dashboard user={user} setPage={setPage} />);
  }, []);

  //If we haven't logged in yet, set page login
  if (!user) {
    return <LoginPage setUser={setUser} />;
  }
  //If we have logged in, set page dashboard
  else {
    return page;
  }
}
