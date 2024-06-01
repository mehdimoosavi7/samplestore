import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import Link from "next/link";

const PagesBanner: React.FC<any> = (props: any) => {
  const addressArray = props.addressArray;
  return (
    <>
      <article
        className="pageBanner"
        style={{
          backgroundImage: `url(images/banners/${props.bg})`,
        }}
      >
        <div className="pageBanner-content">
          <h2>{props.title}</h2>
          <div className="address">
            {addressArray &&
              addressArray.map((address: any, index: any) => {
                return (
                  <Link key={index} href={address.url} className="address-link">
                    <span className="address-link-text">{address.text}</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </article>
    </>
  );
};

export default PagesBanner;
