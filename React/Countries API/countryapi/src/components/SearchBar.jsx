import { useState } from "react";

function SearchBar({ countries, setFiltered }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    let matchedItems=[];
    countries.map((c)=>{
      const name=c.name?.common?.toLowerCase()||"";
      const cca2=c.cca2?.toLowerCase()||"";
      const cca3=c.cca3?.toLowerCase()||"";
      const capital=c.capital?.[0]?.toLowerCase()||"";
      const region=c.region?.toLowerCase()||"";
      if(name.includes(value)||cca2.includes(value)||cca3.includes(value)||capital.includes(value)||region.includes(value)){
        matchedItems.push(c);
      }
    })
    setFiltered(matchedItems);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, code, capital, or continent..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
