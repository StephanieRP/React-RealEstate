import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import MainContent from "./MainContent";
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
