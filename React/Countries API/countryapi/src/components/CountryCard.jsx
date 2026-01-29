function CountryCard({ country }) {
  return (
    <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      <p><b>Capital:</b> {country.capital?.[0]}</p>
      <p><b>Region:</b> {country.region}</p>
      <p><b>Population:</b> {country.population}</p>
      
    </div>
  );
}

export default CountryCard;
