import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Listings() {
  return (
    <section className="listings-container">
      <h2> Short stay</h2>
      <div className="listings__search">
        <input type="text" name="search" />
        <div className="listings__search-sort">
          <p> 390 results found</p>
          <div className="listings__search-options">
            <select name="sort" className="sort">
              <option value="price-high"> Highest Price</option>
              <option value="price-low"> Lowest Price</option>
            </select>
          </div>
          <div className="listings__view" />1 2
        </div>

        <div className="listings__result" />
        <div className="listings__img">
          Img
          <span className="listings__img-address"> Address</span>
          <div className="listings__details">
            <div className="listings__details-img">img</div>
            <div className="listings__details-user">
              user details
              <span> Name</span>
              <span> Date</span>
              <div className="listings__details-info">
                <div className="square-space">square</div>
                <div className="bedrooms">bedrooms</div>
              </div>
            </div>
          </div>
        </div>

        <div className="listings__details-bottom-info">
          <span> $1000 / month </span>
          <span> Hyde Park, Chicago </span>
        </div>
        <div className="listings__pagination" />

        <ul className="listings__pagination-nums">
          <li> Prev</li>
          <li> 1</li>
          <li> 2</li>
          <li> 3</li>
          <li> 4</li>
          <li> 5</li>
          <li> Next</li>
        </ul>
      </div>
    </section>
  );
}
