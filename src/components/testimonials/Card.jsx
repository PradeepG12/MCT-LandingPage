import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './card.css'

const Card = ({ data }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
    };

    return (
        <div className='card-container'>
            <Slider {...settings}>
                {data.map((item, i) => {
                    return (
                        <div className="testi-card" key={i}>
                            <div className="img"><img src={item.img} alt="" /></div>
                            <div className="name">
                                <p>{item.name}</p>
                            </div>
                        </div>)
                })}
            </Slider>
        </div>
    )
}

export default Card 