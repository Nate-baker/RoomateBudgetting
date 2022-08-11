import React, { useEffect } from "react";
import "./styles.css";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";

export default function App() {
  const [user, setUser] = React.useState();
  const [page, setPage] = React.useState();
  const [displayNav, changeDisplayNav] = React.useState(false);

  function changeNav() {
    changeDisplayNav(!displayNav);
  }
  useEffect(() => {
    setPage(<Dashboard uid={user ? user.uid : "none"} setPage={setPage} />);
  }, [user]);

  //If we haven't logged in yet, set page login
  if (!user) {
    return <LoginPage setUser={setUser} />;
  }
  //If we have logged in, set page dashboard
  else {
    return (
      <div className="app-container">
        <button className="nav-button" onClick={changeNav}>
          =
        </button>
        <Navbar display={displayNav} setPage={setPage} uid={user.uid} />
        {page}
      </div>
    );
  }
}
