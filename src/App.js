import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';


function App() {
  const [page,setPage]=useState('home')
  return (
    <div className="App">
      <div className='index-page'>
        <Nav page={page} setPage={setPage}/>
        <Home/>
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
