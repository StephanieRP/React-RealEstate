import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo"> Logo</div>
      <nav>
        <a href="#">Create Ads </a>
        <a href="#">About Us </a>
        <a href="#">Log In</a>
        <button className="register-btn"> Register </button>
      </nav>
    </header>
  );
}
