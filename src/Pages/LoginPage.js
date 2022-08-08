import React from "react";
import { signIn } from "../Components/Auth";

export default function LoginPage({ setUser, setPage }) {
  //Tracks email and password
  const [loginInfo, setLoginInfo] = React.useState();
  const [errorBox, setErrorBox] = React.useState();

  //Updates state with corresponsing {email} or {password} from input boxes
  const updateState = (fromElement) => {
    setLoginInfo({
      ...loginInfo,
      [fromElement.target.id]: fromElement.target.value
    });
    setErrorBox();
  };

  //Handle Login button press and try to AUTH user
  const login = () => {
    if (loginInfo && loginInfo.email && loginInfo.password)
      signIn(loginInfo, setUser);
    else {
      setErrorBox(
        <h3 className="errorBox">Please input a valid email and password</h3>
      );
    }
  };

  return (
    // I wish this could be prettier
    <div className="login--page">
      <h1 className="login--title">Login</h1>
      <img
        className="account--image"
        src={require("../images/account.png")}
        alt="account"
        width="25px"
      ></img>
      <div className="input--box">
        {errorBox}
        <input
          id="email"
          className="email-input"
          type="email"
          placeholder="Email"
          data-tip="Type email"
          onChange={updateState}
        ></input>
        <input
          id="password"
          minLength="8"
          className="password-input"
          type="password"
          placeholder="Password"
          onChange={updateState}
        ></input>
      </div>
      <div className="login--div">
        <div className="login--button--top--fade"></div>
        <button id="login" className="login--button" onClick={login}>
          Login / Create Account
        </button>
      </div>
    </div>
  );
}
