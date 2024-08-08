/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

function Slide({ cards }) {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 7,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="card-item" key={index}>
            {card}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
