import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import { Hero } from './components/Main/Hero';
import { Specials } from './components/Main/Specials';
import { BurgerNav } from './components/Header/BurgerNav';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <Header>
        
          <Link to={"/home"}>
          <img src={Logo} alt='Little Lemon Logo'></img>
          </Link>
        
        <Nav />
        <BurgerNav />
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
