import React from "react";

export default function Header() {
  return (
    <nav>
      <img src={require("../images/logo.png")} className="nav--logo" />
      <h1>my college journal.</h1>
    </nav>
  );
}
