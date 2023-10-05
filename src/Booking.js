import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import BookingForm from './BookingForm';
import { Specials } from './components/Main/Specials';
import { useState } from 'react';

function Booking() {

  const [times, setTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])

  return (
    <>
      <Header>
        <img src={Logo} alt='Little Lemon Logo'></img>
        <Nav />
        
      </Header>
      <Main>
        <BookingForm availableTimes={times} />
        <Specials /> 

      </Main>
      <Footer />
    </>
  );
}

export default Booking;
