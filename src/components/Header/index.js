import { HeaderStyle } from './styles';
import { FaRegMoon, FaMoon } from 'react-icons/fa';

const Header = () => {
   return (
      <>
      <HeaderStyle>
         <p>Where in the world?</p>
         <button>
            <FaRegMoon style={{marginRight: '0.625rem'}} /> 
            Dark Mode
         </button>
      </HeaderStyle>
      </>
   );
};

export default Header;