import { BrandCard, Slide } from "../Components/index";
import {
  ayurvedic,
  diabetic_care,
  elder,
  fitness,
  motherbaby,
  musthave,
  personalcare,
  skincare,
} from "../assets/index.js";
import "../index.css";

const titles = {
  title1: "MustHaves",
  title2: "Elderly Care",
  title3: "Personal Care",
  title4: "Skin Care",
  title5: "Mother and Baby Care",
  title6: "Fitness Supplements",
  title7: "Ayurvedic Care",
  title8: "Diabetic Care",
};

function Brands() {
  const sources = [
    musthave,
    elder,
    personalcare,
    skincare,
    motherbaby,
    fitness,
    ayurvedic,
    diabetic_care,
  ];
  const url = [
    "/musthave",
    "/elder",
    "/personalcare",
    "/skincare",
    "/motherbaby",
    "/fitness",
    "/ayurvedic",
    "/diabetic_care",
  ];

  const cards = Object.values(titles).map((title, index) => (
    <BrandCard
      source={sources[index]}
      key={index}
      Title={title}
      srcUrl={url[index]}
    />
  ));

  return (
    <div className="container">
      <Slide cards={cards} />
    </div>
  );
}

export default Brands;
