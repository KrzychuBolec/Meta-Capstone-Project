import { Nav } from './Nav';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header>
        <img src={Logo} alt='Little Lemon Logo'></img>
        <Nav />
        
      </Header>
      <Main>

      </Main>
      <Footer />
    </>
  );
}

export default App;
