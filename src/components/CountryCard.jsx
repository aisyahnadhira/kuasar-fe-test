import React from "react";

function CountryCard({ country, onClick, isSelected }) {
    const { name} = country;
  
    return (
      <div className={`card ${isSelected && 'selected'}`} onClick={() => onClick(country)}>
        <div className="card-header">
          {name}
        </div>
      </div>
    );
  }

export default CountryCard;