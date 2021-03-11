import { useEffect } from 'react';
import { CountriesContainer } from './styles';
import Country from './Country';

const Countries = ({ countries, region, filteredCountries, setFilteredCountries }) => {

   const filterHandler = () => {
      switch(region) {
         case 'Africa':
            setFilteredCountries(countries && countries.filter(country => country.region === 'Africa'));
            break
         case 'America':
            setFilteredCountries(countries && countries.filter(country => country.region === 'Americas'));
            break
         case 'Asia':
            setFilteredCountries(countries && countries.filter(country => country.region === 'Asia'));
            break
         case 'Europe':
            setFilteredCountries(countries && countries.filter(country => country.region === 'Europe'));
            break
         case 'Oceania':
            setFilteredCountries(countries && countries.filter(country => country.region === 'Oceania'));
            break
         default:
            setFilteredCountries(countries);
            break;
      };
   };

   useEffect(() => filterHandler(), [region, countries])

   return (
      <CountriesContainer>
         {filteredCountries.map(country => (
            <Country key={country.numericCode} country={country} />
         ))}
      </CountriesContainer>
   );
};

export default Countries;