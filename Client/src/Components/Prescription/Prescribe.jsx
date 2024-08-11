import "./Prescribe.css";
import { Pre_Paper } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Prescribe() {
  return (
    <div className="container-file">
      <div className="order-div">
        <img src={Pre_Paper} className="order-image" />
        <div className="flex-order">
          <div className="order-heading">Order with Prescription</div>
          <div className="order-caption">
            Upload Prescription, Get Your Order Delivered
          </div>
          <Link to="/upload/medicines">
            <button className="file-upload">
              <FontAwesomeIcon icon={faPaperclip} /> Upload
            </button>
          </Link>
        </div>
      </div>
      <div className="content-process">
        <div className="content-flex">
          <span>How the process works ?</span>
          <div className="process-rules">
            <table>
              <tr>
                <td className="rule-text">1</td>
                <td className="rule-caption">
                  Upload photo of your Prescription
                </td>
                <td className="rule-text">2</td>
                <td className="rule-caption">
                  Add the Delivery address and place your order
                </td>
              </tr>
              <tr>
                <td className="rule-text">3</td>
                <td className="rule-caption">
                  We will call you to confirm the medicines
                </td>
                <td className="rule-text">4</td>
                <td className="rule-caption">
                  Sit back until your order is delivered at your doorstep
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
