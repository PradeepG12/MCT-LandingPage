import React from 'react'
import './home.css'
import hometrade from '../../utils/Assets/hometrade.png'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='my-title'>Welcome to <span className='highlight'>MCT</span></h1>
      <div className="home-left">
        <div className="intro">
          <h1>
            <span className="main-intro">BECOME A</span>
            <span className="main-intro">PROFESSTIONAL</span>
            <span className="main-intro highlight">TRADER</span>
          </h1>
          <p className='intro-detail'>Connect with <span className="highlight">MCT</span> and gain knowledge about forex trading. Our platform provides an effective and powerful way to learn and trade in forex market.</p>
          <button className="getstart">Get Start</button>
        </div>
      </div>
      <div className="home-right">
        <img src={hometrade} alt="" />
      </div>
    </div>        
  )
}

export default Home