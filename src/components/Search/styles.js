import styled from 'styled-components';

export const SearchStyles = styled.div`
   text-align: center;
   margin: 1.5625rem 0.9375rem;

   form {
      display: flex;

      width: 350px;
      background-color: #fff;
      box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .1);
      border-radius: 0.3125rem;
      margin-bottom: 3.5rem;
   }

   button {
      background-color: inherit;
      padding: 1.25rem;  
      cursor: pointer;
      border-radius: inherit;
   }

   input {
      width: 100%;
      padding-rigth: 0.3125rem;
   }

   button, input {
      border: none;
      color: hsl(0, 0%, 52%);
   }

   @media screen and (min-width: 43.75rem) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
   }

   @media screen and (min-width: 64rem) {
      margin: 1.5625rem 3.75rem;
   }
` 

export const Select = styled.div`
   display: flex;
   justify-content: space-between;

   width: 200px;
   background-color: #fff;
   padding: 1.25rem 4rem;
   border-radius: 0.3125rem;
   box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .1);

   select {
      background: transparent;
      border: none;
      -moz-appearance: none;
      -webkit-appearance: none;
   }
`