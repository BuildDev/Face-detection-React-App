import React from "react";
import Tilt from "react-tilt";
import face from "./face.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt2 mt0">
      <Tilt
        className="Tilt br2 shadow-2 "
        options={{ max: 30 }}
        style={{ height: 185, width: 185 }}
      >
        <div className="Tilt-inner pa4 ">
          <img style={{ paddingTop: "5px" }} alt="logo" src={face} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
