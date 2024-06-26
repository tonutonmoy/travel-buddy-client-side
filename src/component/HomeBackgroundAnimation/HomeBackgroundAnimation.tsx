import React from "react";

const HomeBackgroundAnimation: React.FC = () => {
  return (
    <div className="background-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      />
    </div>
  );
};

export default HomeBackgroundAnimation;
