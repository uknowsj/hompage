import { BrowserRouter, Route } from 'react-router-dom'
import { Provider }  from 'context'
import GlobalStyle from 'style/GlobalStyle'
import Business from 'pages/Business'
import HomePage from 'pages/HomePage'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Provider>
          <div className="App">
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/business" component={Business}></Route>
          </div>
        </Provider>
    </BrowserRouter>
  );
}

export default App
