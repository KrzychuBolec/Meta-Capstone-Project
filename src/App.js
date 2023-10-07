import { Nav } from './components/Header/Nav';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './Footer';
import Logo from "./Logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Homepage';
import Booking from './Booking';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from './Confirmation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
        
        <Route index element={<Homepage />} />
        {/* <Route path="blogs" element={<Blogs />} />
        // <Route path="contact" element={<Contact />} />
        // <Route path="*" element={<NoPage />} /> */}
      </Route>
      <Route path="Home" element={<Homepage />}></Route>
      <Route path='Reservations' element={<Booking />} />
      <Route path='Confirmation' element={<Confirmation />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
