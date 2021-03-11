import { FaSearch } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'

import { SearchStyles, Select } from './styles';

const Search = ({ setRegion, setFilteredCountries }) => {

   
   
   return (
      <SearchStyles>
         <form>
            <button>
               <FaSearch />
            </button>
            <input 
               type="search"
               placeholder="Search for a country..."
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