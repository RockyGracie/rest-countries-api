import {CountryElement, CountryInfo} from './styles';

const Country = ({ country }) => {
   return (
      <CountryElement>
         <img src={country.flag} alt={country.flag} />
         <CountryInfo>
            <h3>{country.name}</h3>
            <p><span>Population:</span> {country.population}</p> 
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital}</p>
         </CountryInfo>
      </CountryElement>
   );
};

export default Country;