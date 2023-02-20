import React from "react";
import "./TestimonialStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom';

const Testimonial = () => {
  const data = [
    {
      name: "Name From Feedback",
      des: "Message from Feedback.",
      img: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/332086581_950822836278215_8037932718543006231_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=H5V8MRZDHYMAX8pGR-W&tn=AeMynJ6mqVMa74Rx&_nc_ht=scontent-atl3-1.xx&oh=00_AfDxeMFFTJ4p_BSfiy1PPgTVkBYtoGSEE2zuQY7GBYHv_A&oe=63F8A855",
    },
    {
      name: "Name From Feedback",
      des: "Message from Feedback.",
      img: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/332086581_950822836278215_8037932718543006231_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=H5V8MRZDHYMAX8pGR-W&tn=AeMynJ6mqVMa74Rx&_nc_ht=scontent-atl3-1.xx&oh=00_AfDxeMFFTJ4p_BSfiy1PPgTVkBYtoGSEE2zuQY7GBYHv_A&oe=63F8A855",
    },
    {
      name: "Name From Feedback",
      des: "Message from Feedback.",
      img: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/332086581_950822836278215_8037932718543006231_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=H5V8MRZDHYMAX8pGR-W&tn=AeMynJ6mqVMa74Rx&_nc_ht=scontent-atl3-1.xx&oh=00_AfDxeMFFTJ4p_BSfiy1PPgTVkBYtoGSEE2zuQY7GBYHv_A&oe=63F8A855",
    },
    {
      name: "Name From Feedback",
      des: "Message from Feedback.",
      img: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/332086581_950822836278215_8037932718543006231_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=H5V8MRZDHYMAX8pGR-W&tn=AeMynJ6mqVMa74Rx&_nc_ht=scontent-atl3-1.xx&oh=00_AfDxeMFFTJ4p_BSfiy1PPgTVkBYtoGSEE2zuQY7GBYHv_A&oe=63F8A855",
    },
  ];

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h1>Testimonial</h1>
        <span className="line"></span>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
            <div className="content-slider-main" >
              <div className="content-slider" key={index}>
                <img
                  src={item.img}
                  alt="testmonial"
                  className="center-image"
                />
                <div className="circle"></div>
                <p>{item.name}</p>
                <p>{item.des}</p>
              </div>
            </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
