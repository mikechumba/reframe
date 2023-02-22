import { useState } from "react";

const SearchBar = ({ categories, regions, sortMethods, sortOrgs, updateFilterValues }) => {
  

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    updateFilterValues(state => ({ ...state, [name]: e.target.value }));
  }

  return (
    <form className="search-form" role="search">
      <p>
        <label className="visually-hidden" htmlFor="category-field">Select Category</label>
        <select name="category" id="category-field" onChange={handleChange}>
          <option value="">All Categories</option>
          {categories.map((category, i) => (
            <option value={category} key={`category-${i+1}`}>{category}</option>
          ))}
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="region-field">Select Region</label>
        <select name="region" id="region-field" onChange={handleChange}>
          <option value="">All Regions</option>
          {regions.map((region, i) => (
            <option value={region} key={`region-${i+1}`}>{region}</option>
          ))}
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="sort-by">Select Sorting Method</label>
        <select name="sortBy" id="sort-by" onChange={handleChange}>
          <option value="">Sort By</option>
          {sortMethods.map((method, i) => (
            <option value={method} key={`sort-by-${i+1}`}>{method}</option>
          ))}
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="search-field">Search</label>
        <input name="searchParam" id="search-field" onChange={handleChange} placeholder="Search" type="text" className="search-field" />
      </p>
    </form>
  );
}

export default SearchBar;