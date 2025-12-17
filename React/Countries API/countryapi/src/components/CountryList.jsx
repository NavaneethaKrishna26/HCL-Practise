import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div className="grid">
      {countries.map((c, index) => (
        <CountryCard key={index} country={c} />
      ))}
    </div>
  );
}

export default CountryList;
