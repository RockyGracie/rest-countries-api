import styled from 'styled-components';

export const CountriesContainer = styled.div`
   padding: 0 30px;
   margin: 0 auto;

   @media screen and (min-width: 55rem) {
      display: grid;
      grid-template-columns: repeat(2, 1fr)
   }
   
   @media screen and (min-width: 1125px) {
      grid-template-columns: repeat(3, 1fr)
   }
   
   @media screen and (min-width: 90rem) {
      grid-template-columns: repeat(4, 1fr)
   }
`

export const CountryElement = styled.div`
   display: flex;
   flex-direction: column;

   width: 20.625rem;
   height: 25rem;
   margin: 0 auto 3.125rem;
   box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .1);

   img {
      flex: 50%;
      width: 100%;
      height: 100%;
   }
`

export const CountryInfo = styled.div`
   flex: 50%;
   padding: 1.875rem;

   h3 { margin-bottom: 0.75rem }

   p span { font-weight: 600 }

   p:not(:last-child) { margin-bottom: 0.3125rem }
` 