import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import RegionSelector from "./components/RegionSelector";

function App() {
  // Liste des pays
  const [countries, setCountries] = useState([]);

  // Région sélectionnées
  const [region, setRegion] = useState("europe");
 

  // API restcountries
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`) // Va chercher les données de l'API
      .then((response) => response.json()) //  Converti les données en JSON
      .then((data) => setCountries(data)); // On met le tableau de données dans la variable countries
  }, [region]);
 
  return (
    <>
      <div className="App">
        <header>
          <h1>Countrix</h1>
          <RegionSelector onChange={(setRegion)}/>
        </header>
        <div className="row gap-4 text-center justify-content-center">
          {countries.map((country) => (
            <CountryCard key={country.cca2} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
