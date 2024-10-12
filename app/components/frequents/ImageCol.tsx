import React from "react";

interface ImageColProps {
  src: string;
}

const ImageCol: React.FC<ImageColProps> = ({ src }) => {
  return (
    <>
      <img src={src} className="index-about-main-img" />
    </>
  );
};

export default ImageCol;
