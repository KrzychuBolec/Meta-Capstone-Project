import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import BookingForm from './BookingForm';
import { Specials } from './components/Main/Specials';
import {useTime } from './Reducer';
import { Link, useNavigate } from 'react-router-dom';
import { submitAPI } from './api';
import { useState } from 'react';
import { Loading } from './Loading';
import { BurgerNav } from './components/Header/BurgerNav';

function Booking() {

  const [availableTimes,dispatch] = useTime()
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  function submitForm(form){

    setLoading(true)

    const result = submitAPI(form)

    setTimeout(()=>{
      if(result){
        navigate("/Confirmation")
      }

      setTimeout(()=>{
        navigate("/Home")
      },3000)

    },3000)



  }

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
        <BookingForm availableTimes={availableTimes} changeHandler={dispatch} submitForm ={submitForm} />
        {loading && <Loading />}
        <Specials /> 

      </Main>
      <Footer />
    </>
  );
}

export default Booking;
