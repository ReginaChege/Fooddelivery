// import './App.css';
import React from 'react';
import LandingPage from './component/LandingPage';
import Navbar from './component/Navbar';
import Delivery from './component/Delivery';
import RegularMenu from './component/RegularMenu';
import Option from './component/Option';
import Footer from './component/Footer';
import Offers from './component/Offers';
function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Option/>
      <Delivery/>
      <RegularMenu/>
      <Offers/>
      <Footer/>
    </div>
    
  );
}

export default App;
