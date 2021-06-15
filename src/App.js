import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
