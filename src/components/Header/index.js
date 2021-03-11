import { HeaderStyle } from './styles';
import { FaRegMoon, FaMoon } from 'react-icons/fa';

const Header = ({ themeToggler }) => {
   return (
      <>
      <HeaderStyle>
         <p>Where in the world?</p>
         <button onClick={() => themeToggler()}>
            <FaRegMoon style={{marginRight: '0.625rem'}} /> 
            Dark Mode
         </button>
      </HeaderStyle>
      </>
   );
};

export default Header;