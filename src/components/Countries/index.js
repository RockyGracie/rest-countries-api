import { CountriesContainer, Country, CountryInfo } from './styles';
import Flag from './Flag';

const Countries = () => {
   return (
      <CountriesContainer>
         <Country>
            <Flag />
            <CountryInfo>
               <h3>Germany</h3>
               <p><span>Population:</span> 81,770,900</p> 
               <p><span>Region:</span> Europe</p>
               <p><span>Capital:</span> Berlin</p>
            </CountryInfo>
         </Country>
         <Country>
            <Flag />
            <CountryInfo>
               <h3>USA</h3>
               <p><span>Population:</span> 81,770,900</p> 
               <p><span>Region:</span> Europe</p>
               <p><span>Capital:</span> Berlin</p>
            </CountryInfo>
         </Country>
         <Country>
            <Flag />
            <CountryInfo>
               <h3>BRAZIL</h3>
               <p><span>Population:</span> 81,770,900</p> 
               <p><span>Region:</span> Europe</p>
               <p><span>Capital:</span> Berlin</p>
            </CountryInfo>
         </Country>
         <Country>
            <Flag />
            <CountryInfo>
               <h3>BRAZIL</h3>
               <p><span>Population:</span> 81,770,900</p> 
               <p><span>Region:</span> Europe</p>
               <p><span>Capital:</span> Berlin</p>
            </CountryInfo>
         </Country>
      </CountriesContainer>
   );
};

export default Countries;