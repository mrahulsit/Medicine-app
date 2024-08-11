import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Pincode from "./Pincode.jsx";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTruckFast } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [name, setName] = React.useState("");
  const [postOffice, setPostOffice] = React.useState("");

  const toggleDrawer = (open) => (event) => {
    if (event && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ right: open });
  };

  const handleRequest = async () => {
    try {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${name}`
      );
      const postOfficeName = res.data[0].PostOffice[0].Name;
      setPostOffice(postOfficeName);
      toggleDrawer(false)();
    } catch (error) {
      console.error("Pincode Not Found!");
      setPostOffice("Pincode Not Found!");
    }
  };

  return (
    <div className="head">
      <span className="spanSmall">
        <FontAwesomeIcon icon={faTruckFast} style={{ color: "#089b6f" }} />
        &nbsp; Fast Delivery to
      </span>
      <br />
      <span onClick={toggleDrawer(true)} className="spantext">
        {postOffice ? (
          <span>
            {postOffice} <FontAwesomeIcon icon={faAngleDown} />
          </span>
        ) : (
          <span>
            Select Pincode <FontAwesomeIcon icon={faAngleDown} />
          </span>
        )}
      </span>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        disableEnforceFocus
      >
        <Pincode
          name={name}
          setName={setName}
          handleRequest={handleRequest}
          closeDrawer={toggleDrawer(false)}
        />
      </Drawer>
    </div>
  );
}
