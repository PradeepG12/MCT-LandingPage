import React from 'react'
import './testi.css'
import Card from './Card.jsx'

const Testimonial = () => {

  const data=[
    {img:"",name:"Araindhan"},
    {img:"",name:"Venkat"},
    {img:"",name:"Pradeep"},
    {img:"",name:"Arul"}
  ]

  return (
    <div className='testimonial'>
        <div className="testi-container">
          <Card data={data}/>
        </div>
    </div>
  )
}

export default Testimonial