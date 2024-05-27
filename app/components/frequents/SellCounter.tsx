import React from "react";

const SellCounter = ({text, subtitle} : any) => {
  return (
    <>
      <div className="sell-counter col-6">
        <p className="capitalize">{text}</p>
        <span>{subtitle}</span>
      </div>
    </>
  );
};

export default SellCounter;
