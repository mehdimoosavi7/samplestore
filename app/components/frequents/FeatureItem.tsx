import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureItem = (props : any) => {
  return (
    <div className={props.class ? `feature-item ${props.class}` : "feature-item"}>
      <div className="feature-icon">
        <FontAwesomeIcon icon={props.icon} size={ props.size ? props.size : "2xl"} />
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
