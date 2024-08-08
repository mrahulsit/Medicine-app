import * as React from "react";
import Drawer from "@mui/material/Drawer";
import "../index.css";
import Pincode from "./Pincode.jsx";
import axios from "axios";

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [name, setName] = React.useState("");
  const [postOffice, setPostOffice] = React.useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const closeDrawer = (anchor) => {
    setState({ ...state, [anchor]: false });
  };

  const handleRequest = async () => {
    try {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${name}`
      );
      const postOfficeName = res.data[0].PostOffice[0].Name;
      setPostOffice(postOfficeName);
      console.log(postOfficeName);
      closeDrawer("right"); // Close the drawer after successful request
    } catch (error) {
      console.error("Pincode Not Found!");
      setPostOffice("Pincode Not Found!");
    }
  };

  return (
    <div className="head">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span className="spanSmall">Delivery to</span> <br />
          <span onClick={toggleDrawer(anchor, true)} className="spantext">
            {postOffice ? `${postOffice}` : "Enter Pincode"}
          </span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            disableEnforceFocus
          >
            <Pincode
              name={name}
              setName={setName}
              handleRequest={handleRequest}
              closeDrawer={() => closeDrawer(anchor)}
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
