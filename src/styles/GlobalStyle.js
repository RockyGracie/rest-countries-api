import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      outline: none;

      &:focus {
         outline: none;
      }
   }

   body {
      font-family: "Nunito Sans", sans-serif;
      background-color: ${props => props.theme.body};
   }
`