import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Header from './components/Header';
import MainPage from './components/MainPage'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <div className="App">
          <Header />
          <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
