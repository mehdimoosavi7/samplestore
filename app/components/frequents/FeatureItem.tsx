import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureItem = ({icon, title, text} : String) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <FontAwesomeIcon icon={icon} size="2xl" />
      </div>
      <div className="feature-text">
        <h3>{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
