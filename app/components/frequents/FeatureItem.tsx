import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FeatureItem = (props: any) => {
  return (
    <div
      className={props.class ? props.class + " feature-item" : "feature-item"}
    >
      <div className="feature-icon">
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size ? props.size : "2xl"}
        />
      </div>
      <div className="feature-text">
        <h3>{props.title}</h3>
        {props.text && <p>{props.text}</p>}
        {props.link1 && <Link href={props.linkType + props.link1}>{props.link1}</Link>}
        {props.link2 && <Link href={props.linkType + props.link2}>{props.link2}</Link>}
      </div>
    </div>
  );
};

export default FeatureItem;
