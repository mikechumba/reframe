const SearchBar = () => {
  return (
    <form className="search-form" role="search">
      <p>
        <label className="visually-hidden" htmlFor="category-field">Category</label>
        <select name="category-field" id="">
          <option value="">Category</option>
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="region-field">Region</label>
        <select name="region-field" id="">
          <option value="">Region</option>
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="sort-by-field">Sort By</label>
        <select name="sort-by-field" id="">
          <option value="">Sort By</option>
        </select>
      </p>
      <p>
        <label className="visually-hidden" htmlFor="sort-by-field">Sort By</label>
        <input placeholder="Search" type="text" className="search-field" />
      </p>
    </form>
  );
}

export default SearchBar;