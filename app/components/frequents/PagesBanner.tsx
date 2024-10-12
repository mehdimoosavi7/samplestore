import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import Link from "next/link";
import { Mixed } from "mongoose";

interface PagesBannerProps {
  bg: string;
  title: string;
  addressArray: Mixed[];
}

const PagesBanner: React.FC<PagesBannerProps> = ({
  bg,
  title,
  addressArray,
}) => {
  const addressesArray = addressArray;
  return (
    <>
      <article
        className="pageBanner"
        style={{
          backgroundImage: `url(images/banners/${bg})`,
        }}
      >
        <div className="pageBanner-content">
          <h2>{title}</h2>
          <div className="address">
            {addressesArray &&
              addressesArray.map((address: any, index: any) => {
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
