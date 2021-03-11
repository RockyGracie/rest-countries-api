import { useState, useEffect } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('Africa');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();

    setCountries(data);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Search 
        setRegion={setRegion}
        setFilteredCountries={setFilteredCountries}  
      />
      <Countries 
        countries={countries}
        region={region}      
      />
    </>
  );
};

export default App;   