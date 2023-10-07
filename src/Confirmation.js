import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import BookingForm from './BookingForm';
import { Specials } from './components/Main/Specials';

function Confirmation() {

  return (
    <>
      <Header>
        <img src={Logo} alt='Little Lemon Logo'></img>
        <Nav />
        
      </Header>
      <Main>
        <h1>CONFIRMED</h1>
        <Specials /> 

      </Main>
      <Footer />
    </>
  );
}

export default Confirmation;
