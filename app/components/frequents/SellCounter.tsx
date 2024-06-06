import React from "react";
interface SellCounterProps {
  text: string;
  subtitle: string;
}
const SellCounter: React.FC<SellCounterProps> = ({ text, subtitle }) => {
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
