import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
    @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
    font-family:'Noto Sans KR', 'Spoqa Han Sans', 'Sans-serif';
    color: black!important;
    /* scroll-behavior: smooth; */
  }

  body {
    -ms-overflow-style: none; 

  ::-webkit-scrollbar { 
    display: none;
  } 
  } 
  
  a {
    color: black;
    text-decoration: none;
  }
  .stop-scroll {
    overflow: hidden;
    touch-action: none; 
  }
`

export default GlobalStyle;


