import React, { Component } from "react";
import Filter from "./filter";
import Listings from "./listings";

export default class MainContent extends Component {
  render() {
    return (
      <div className="main-content-container">
        <Filter />
        <div>
          <Listings />
        </div>
      </div>
    );
  }
}
