import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import BookingForm from './BookingForm';
import { Specials } from './components/Main/Specials';
import { BurgerNav } from './components/Header/BurgerNav';
import { Link } from 'react-router-dom';

function Confirmation() {

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
        <div className='confirmation'>
          <h1>Booking Confirmed</h1>
          <p>Thank you for reservation - see you soon</p>
        </div>
        <Specials /> 

      </Main>
      <Footer />
    </>
  );
}

export default Confirmation;
