import { FaSearch } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'

import { SearchStyles, Select } from './styles';

const Search = ({ setRegion, country, setCountry, setFilteredCountries }) => {

   const submitHandler = (e) => {
      e.preventDefault();

      fetchCountry();
   };

   const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
      const data = await res.json();

      setFilteredCountries(data)
   }

   return (
      <SearchStyles>
         <form onSubmit={submitHandler}>
            <button>
               <FaSearch />
            </button>
            <input 
               type="search"
               placeholder="Search for a country..."
               value={country}
               onChange={(e) => setCountry(e.target.value)}
            />
         </form>
         <Select>
            <select onChange={(e) => setRegion(e.target.value)}>
               <option value="Africa">Africa</option>
               <option value="Americas">Americas</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europe</option>
               <option value="Oceania">Oceania</option>
            </select>
            <MdArrowDropDown />
         </Select>
      </SearchStyles>
   );
};

export default Search;