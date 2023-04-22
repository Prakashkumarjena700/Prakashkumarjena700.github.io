import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Projectslider({ img1, img2, img3, img4 }) {

    const settings = {
        arrows:false,
        dots: false,
        fade: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2500,
    };

    return (
        <div className='slidercontainer' >
            {/* <img width='100%' src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg" alt="" /> */}
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
