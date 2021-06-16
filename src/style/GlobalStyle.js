import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
    @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family:'Noto Sans KR', 'Spoqa Han Sans', 'Sans-serif';
    color: black!important;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

export default GlobalStyle;


