import React from "react";

export default function Filter() {
  return (
    <section className="filter-container">
      <h4> Filter </h4>
      <select name="neighborhood" className="filters filter__neighborhood">
        <option> Hyde Park</option>
        <option> South Shore</option>
      </select>
      <select name="housetype" className="filters filter__housetype">
        <option> Apartment</option>
        <option> House</option>
      </select>
      <select name="bedrooms" className="filters filter__bedrooms">
        <option> Studio</option>
        <option>2 Bedroom</option>
      </select>

      <div className="filter__price">
        <span className="filter__title"> Price </span>
        <input type="text" name="min-price" className="filter__min-price" />
        <input type="text" name="max-price" className="filter__max-price" />
      </div>

      <div className="filter__floor-space">
        <span className="filter__title"> Floor Space </span>
        <input type="text" name="min-price" className="filter__min-price" />
        <input type="text" name="max-price" className="filter__max-price" />
      </div>

      <div className="filters filter__extra">
        <span className="filter__title"> Extras </span>
        <label htmlFor="extras">
          Elevators
          <input type="checkbox" name="extras" value="elevator" />
        </label>
        <label htmlFor="extras">
          Pool
          <input type="checkbox" name="extras" value="pool" />
        </label>
        <label htmlFor="extras">
          Finished Basement
          <input type="checkbox" name="extras" value="basement" />{" "}
        </label>
        <label htmlFor="extras">
          Gym
          <input type="checkbox" name="extras" value="gym" />
        </label>
      </div>
    </section>
  );
}
