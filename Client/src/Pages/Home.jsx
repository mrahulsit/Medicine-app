import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";
import "../index.css";
import { CarouselSwipe, Brands, Card } from "../Components/index.js";
import { wandc, medicine, healthcare, medicare } from "../assets/index.js";
import { InputLabel } from "@mui/material";

const titles = {
  title1: "Medicines",
  title2: "HealthCare",
  title3: "Medicare",
  title4: "Women and Child",
};

function Home() {
  const sources = [medicine, healthcare, medicare, wandc];
  return (
    <>
      <h2 className="aboutText">What Are you Looking for ?</h2>
      <Form className="mb-5">
        <InputLabel>
          <div
            className="search-wrapper"
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <input
              type="search"
              placeholder="Search"
              className="search p-3 searchbar"
              aria-label="Search"
            />
            <Button
              className="search d-flex align-items-center"
              style={{
                borderRadius: "5rem",
                position: "absolute",
                right: "25dvw",
                height: "75%",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                style={{ color: "#ffffff" }}
              />
              &nbsp;&nbsp;
              <span className="search-span">Search</span>
            </Button>
          </div>
        </InputLabel>
      </Form>

      <div className="card-container">
        {Object.values(titles).map((title, index) => (
          <Card source={sources[index]} key={index} Title={title} />
        ))}
      </div>
      <CarouselSwipe />
      <h2 className="shop">Shop By Categories</h2>
      <Brands />
    </>
  );
}

export default Home;
