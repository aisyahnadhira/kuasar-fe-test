import React from "react";

function CountryCard({ country, onClick, isSelected }) {
    const { name, emoji } = country;
  
    return (
      <div className={`card ${isSelected && 'selected'}`} onClick={() => onClick(country)}>
        <div className="card-header">
          <span role="img" aria-label="flag">{emoji}</span> {name}
        </div>
      </div>
    );
  }

export default CountryCard;