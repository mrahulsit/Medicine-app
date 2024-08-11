import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlusBanner from "../../assets/Plus-Banner.png";
import "./Member.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function MemberPlus() {
  return (
    <div>
      <Link to="/member">
        <div className="plus-image">
          <img src={PlusBanner} alt="Member-Image" />
          <button className="explore-button" to="/member">
            <span>
              <span>Explore Now</span> <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
}
