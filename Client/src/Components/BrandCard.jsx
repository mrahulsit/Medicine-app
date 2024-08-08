/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../index.css";

export default function BrandCard({ source, Title, srcUrl }) {
  return (
    <div style={{ margin: "0.5em" }}>
      <Link to={srcUrl} className="card" style={{ width: "100%", border: "0" }}>
        <img
          style={{
            width: "100%",
            borderRadius: "1rem",
            border: "0",
            height: "50%",
          }}
          src={source}
          alt={Title}
          className="card-image"
        />
      </Link>
      <div className="card-text">
        <h6>{Title}</h6>
      </div>
    </div>
  );
}
