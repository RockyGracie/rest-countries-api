import { FaSearch } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'

import { SearchStyles, Select } from './styles';

const Search = () => {
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
            <select>
               <option value="africa">Africa</option>
               <option value="america">America</option>
               <option value="asia">Asia</option>
               <option value="europe">Europe</option>
               <option value="oceania">Oceania</option>
            </select>
            <MdArrowDropDown />
         </Select>
      </SearchStyles>
   );
};

export default Search;