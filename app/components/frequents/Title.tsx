import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <span className="section-title">{title}</span>;
};

export default Title;
