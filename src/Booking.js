import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import BookingForm from './BookingForm';
import { Specials } from './components/Main/Specials';
import {useTime } from './Reducer';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api';

function Booking() {

  const [availableTimes,dispatch] = useTime()

  const navigate = useNavigate()

  function submitForm(form){


    const result = submitAPI(form)

    if(result){
      navigate("/Confirmation")
    }


  }

  return (
    <>
      <Header>
        <img src={Logo} alt='Little Lemon Logo'></img>
        <Nav />
        
      </Header>
      <Main>
        <BookingForm availableTimes={availableTimes} changeHandler={dispatch} submitForm ={submitForm} />
        <Specials /> 

      </Main>
      <Footer />
    </>
  );
}

export default Booking;
