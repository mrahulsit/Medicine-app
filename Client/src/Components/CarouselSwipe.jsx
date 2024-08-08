import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { item1, item2, item3, item4 } from "../assets/index.js";
import "../index.css";

export default function CarouselSwipe() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <div className="box-width">
      <Carousel responsive={responsive} partialVisible={true}>
        <div className="image-width">
          <img src={item1} alt="FirstCard" className="image" />
        </div>
        <div className="image-width">
          <img src={item2} alt="FirstCard" className="image" />
        </div>
        <div className="image-width">
          <img src={item3} alt="FirstCard" className="image" />
        </div>
        <div className="image-width">
          <img src={item4} alt="FirstCard" className="image" />
        </div>
        <div className="image-width">
          <img src={item4} alt="FirstCard" className="image" />
        </div>
        <div className="image-width">
          <img src={item4} alt="FirstCard" className="image" />
        </div>
      </Carousel>
    </div>
  );
}
