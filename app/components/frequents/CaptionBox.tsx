import React from "react";
interface CaptionBoxProps {
  caption: string;
  text: string;
  textColor?: string;
}

const CaptionBox: React.FC<CaptionBoxProps> = ({
  caption,
  text,
  textColor,
}) => {
  return (
    <>
      <h2 style={{ color: textColor }}>{caption}</h2>
      <p style={{ color: textColor }}>{text}</p>
    </>
  );
};

export default CaptionBox;
