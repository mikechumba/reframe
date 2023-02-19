import { useState } from "react";

const SearchBar = ({ categories, regions, sortMethods, sortOrgs, updateFilterValues }) => {
  

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    updateFilterValues(state => ({ ...state, [name]: e.target.value }));
  }

  return (
    <form className="search-form" role="search">
      <p>
        <label className="visually-hidden" htmlFor="category-field">Category</label>
        <select name="category" id="category-field">
          <option value="">Category</option>
          {categories.map((category, i) => (
            <option value={category} key={`category-${i+1}`}>{category}</option>
          ))}
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="region-field">Region</label>
        <select name="region" id="region-field">
          <option value="">Region</option>
          {regions.map((region, i) => (
            <option value={region} key={`region-${i+1}`}>{region}</option>
          ))}
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="sort-by">Sort By</label>
        <select name="sort-by" id="" onChange={sortOrgs}>
          <option value="">Sort By</option>
          {sortMethods.map((method, i) => (
            <option value={method} key={`sort-by-${i+1}`}>{method}</option>
          ))}
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="search-field">Sort By</label>
        <input name="search" id="search-field" placeholder="Search" type="text" className="search-field" />
      </p>
    </form>
  );
}

export default SearchBar;