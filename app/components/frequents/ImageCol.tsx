import React from "react";

const ImageCol = ({ src }: { string }) => {
  return (
    <>
      <img src={src} className="index-about-main-img" />
    </>
  );
};

export default ImageCol;
