import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from 'style/GlobalStyle';
import Business from 'components/Business/Business';
import HomePage from 'pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
    
        <div className="App">
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/business" component={Business}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
