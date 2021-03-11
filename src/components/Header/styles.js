import styled from 'styled-components';

export const HeaderStyle = styled.header`
   display: flex;
   justify-content: space-between;
   padding: 1.875rem 0.9375rem;

   color: ${props => props.theme.fontColor};
   font-weight: 800;
   background-color: ${props => props.theme.background};
   box-shadow: 0 8px 8px rgba(0, 0, 0, .1);

   button {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: transparent;
      border: none;
      font-weight: 300;
      cursor: pointer;
   }

   @media screen and (min-width: 64rem) {
      padding: 1.875rem 5.3125rem;
   }
`