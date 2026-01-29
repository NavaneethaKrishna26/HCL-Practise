import { useEffect, useState } from "react";

function SearchBar({ countries, setFiltered }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  // 🔁 Debounced search (real-world performance)
  useEffect(() => {
    const timer = setTimeout(() => {
      let matchedItems = countries.filter((c) => {
        const name = c.name?.common?.toLowerCase() || "";
        const cca2 = c.cca2?.toLowerCase() || "";
        const cca3 = c.cca3?.toLowerCase() || "";
        const capital = c.capital?.[0]?.toLowerCase() || "";
        const regionValue = c.region?.toLowerCase() || "";

        const matchesSearch =
          name.includes(query) ||
          cca2.includes(query) ||
          cca3.includes(query) ||
          capital.includes(query) ||
          regionValue.includes(query);

        const matchesRegion =
          region === "all" || regionValue === region;

        return matchesSearch && matchesRegion;
      });

      // 🔃 Sorting
      if (sortBy === "name") {
        matchedItems.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      } else if (sortBy === "population") {
        matchedItems.sort((a, b) => b.population - a.population);
      }

      setFiltered(matchedItems);
    }, 400); // debounce delay

    return () => clearTimeout(timer);
  }, [query, region, sortBy, countries, setFiltered]);

  // ❌ Clear search
  const clearSearch = () => {
    setQuery("");
    setRegion("all");
    setSortBy("name");
    setFiltered(countries);
  };

  return (
    <div className="search-bar">
      {/* 🔍 Search input */}
      <input
        type="text"
        placeholder="Search by name, code, capital, or continent..."
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      {/* 🌍 Region filter */}
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="all">All Continents</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
        <option value="oceania">Oceania</option>
      </select>

      {/* 🔃 Sort */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name (A–Z)</option>
        <option value="population">Sort by Population</option>
      </select>

      {/* ❌ Clear */}
      {(query || region !== "all") && (
        <button onClick={clearSearch}>Clear</button>
      )}
    </div>
  );
}

export default SearchBar;
