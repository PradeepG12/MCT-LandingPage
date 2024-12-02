import React from 'react'
import './offer.css'
import customerservice from '../../utils/Assets/customerservice.png'
import liveclass from '../../utils/Assets/liveclass.png'
import Mentorship from '../../utils/Assets/Mentorship.png'

const offer=[{
    img:Mentorship,
    title:"1:1 Mentorship",
    desc:"Our seasoned trading experts provide one-on-one mentorship tailored to your unique goals and needs, ensuring you receive the focused attention you deserve.Learn proven trading strategies and techniques designed to maximize your profitability and minimize risks. Our mentors will help you develop a robust trading plan suited to your trading style and market conditions."
},{
    img:liveclass,
    title:"Live Classes",
    desc:"Our live classes are designed to cater to all levels, from beginners to advanced traders, ensuring that everyone can benefit from our expert instruction.Join our live classes to gain practical knowledge, receive immediate feedback, and connect with a community of like-minded traders."
},{
    img:customerservice,
    title:"24/7 Customer Support",
    desc:"Our dedicated support team is available around the clock to help with any questions or issues, providing you with real-time, expert guidance. Whether you need help with trading strategies, technical issues, or account management, our knowledgeable professionals are here to assist you through live chat, email, or phone."
}]

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-container">
            <h1 className="offer-title">What we offer?</h1>
            <p className="offer-details"><span className="space"></span> <span className="highlight">Welcome to MCT</span>, your trusted partner in mastering the art of trading. Our comprehensive mentorship and classes are designed to empower traders of all levels, whether you're a novice stepping into the trading world or an experienced trader looking to refine your strategies</p>
            <div className="box-container">
                {offer.map((item,idex)=>{
                    return(<div className="box-outer" key={idex} onClick={(e)=>{e.preventDefault()}}>
                        <div className="img"><img src={item.img} alt="" /></div>
                        <div className="box-details">
                            <div className="box-title"><h1>{item.title}</h1></div>
                            <div className="box-desc"><p>{item.desc}</p></div>
                        </div>
                    </div>)
                })}

                


            </div>
        </div>
    </div>
  )
}

export default Offer