import React from "react";
import Logo from "../img/clock-regular.svg";

function Header() {
  return (
    <header className="header">
      <img className="image" src={Logo} alt="logo"></img>
      <span>Pomodoro Timer</span>
    </header>
  );
}

export default Header;
