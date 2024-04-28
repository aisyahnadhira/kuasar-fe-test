import React from "react";


function CountryInfo({ country }) {
    const { capital, currency, languages, continent, phones } = country;
  
    return (
      <div className="info">
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Currency:</strong> {currency}</p>
        <p><strong>Languages:</strong> {languages.map(lang => lang.name).join(', ')}</p>
        <p><strong>Continent:</strong> {continent.name}</p>
        <p><strong>Phones:</strong> {phones}</p>
      </div>
    );
  }

  export default CountryInfo;