import React from "react";

const CaptionBox = ({ caption, text, textColor } : { string }) => {
  return (
    <>
      <h2 style={{ color: textColor }}>{caption}</h2>
      <p style={{ color: textColor }}>{text}</p>
    </>
  );
};

export default CaptionBox;
