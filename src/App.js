import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from 'style/GlobalStyle';
import Business from 'components/Business/Business';
import { Home } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route path="/business" component={Business}></Route>
          {/* <Header />
          <MainPage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
