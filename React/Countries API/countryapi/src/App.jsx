import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";
import "./styles.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,region,flags")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>🌍 Country Explorer</h1>
      <SearchBar countries={countries} setFiltered={setFiltered} />
      {loading ? <p>Loading...</p> : <CountryList countries={filtered} />}
    </div>
  );
}

export default App;
