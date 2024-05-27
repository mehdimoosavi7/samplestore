import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const FeatureItem = (props : any) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <FontAwesomeIcon icon={props.icon} size="2xl" />
      </div>
      <div className="feature-text">
        <h3>{props.title}</h3>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
