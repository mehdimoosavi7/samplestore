import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

interface FeatureItemProps {
  classname?: string;
  icon: IconProp;
  size?: SizeProp;
  title: string;
  text?: string;
  link1?: string;
  link2?: string;
  linkType?: string;
}

const FeatureItem:React.FC<FeatureItemProps> = ({classname,icon,size,title,text,link1,link2,linkType}) => {
  return (
    <div
      className={classname ? classname + " feature-item" : "feature-item"}
    >
      <div className="feature-icon">
        <FontAwesomeIcon
          icon={icon}
          size={size ? size : "2xl"}
        />
      </div>
      <div className="feature-text">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {link1 && <Link href={linkType + link1}>{link1}</Link>}
        {link2 && <Link href={linkType + link2}>{link2}</Link>}
      </div>
    </div>
  );
};

export default FeatureItem;
