import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Offer from './components/home/Offer';
import Testimonial from './components/testimonials/Testimonial';


function App() {
  const [page,setPage]=useState('home')
  return (
    <div className="App">
      <div className='index-page'>
        <Nav page={page} setPage={setPage}/>
        <div className='main-page'>
          <Home/>
          <Offer/>
          <Testimonial/>
        </div>
      </div>
      <Footer/>
      

      
      
      
      {/* bubbles */}
      <>
        <div className=" snow">
        </div>
        <div className=" snow">
        </div>
      </>
      
    </div>
  );
}

export default App;
