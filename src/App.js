import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('Africa');
  const [country, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [theme, setTheme] = useState('light');

  console.log(theme);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();

    setCountries(data);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header 
        themeToggler={themeToggler}  
      />
      <Search 
        setRegion={setRegion}
        country={country}
        setCountry={setCountry}
        setFilteredCountries={setFilteredCountries}
      />
      <Countries 
        countries={countries}
        region={region}  
        setFilteredCountries={setFilteredCountries}    
        filteredCountries={filteredCountries}    
      />
    </ThemeProvider>
  );
};

export default App;   