import styled from 'styled-components'

const HeaderContainer  = styled.header`
   position: fixed;
   height: 70px;
   background: #83a083;
   display: flex;
   padding: 0.25em 1em;
   color: #fff;
   top: 0;
   width: 100%;
   z-index: 9;
   .wrapper { 
       display: flex;
       justify-content: space-between;
       width: 100%;
       align-items: center;
   }
 `;

 export default HeaderContainer;