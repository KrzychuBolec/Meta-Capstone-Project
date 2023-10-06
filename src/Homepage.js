import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import { Hero } from './components/Main/Hero';
import { Specials } from './components/Main/Specials';

function Homepage() {
  return (
    <>
      <Header>
        <img src={Logo} alt='Little Lemon Logo'></img>
        <Nav />
        
      </Header>
      <Main>
        <Hero />
        <Specials /> 

      </Main>
      <Footer />
    </>
  );
}

export default Homepage;
