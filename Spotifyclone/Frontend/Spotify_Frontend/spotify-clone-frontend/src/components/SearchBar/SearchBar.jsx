import "./SearchBar.css";

function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search songs..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
