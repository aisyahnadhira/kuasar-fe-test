import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import './App.css';
import CountryCard from './components/CountryCard';
import CountryInfo from './components/CountryInfo';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      capital
      currency
      phones
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  const handleCountryClick = (country) => {
    setSelectedCountry(country === selectedCountry ? null : country);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const filteredCountries = data.countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>List of Countries</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="card-container">
        {filteredCountries.map(country => (
          <div key={country.name}>
            <CountryCard
              country={country}
              onClick={handleCountryClick}
              isSelected={selectedCountry === country}
            />
            {selectedCountry === country && <CountryInfo country={country} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default AppWrapper;
