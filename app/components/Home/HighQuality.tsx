"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";
import useSWR from "swr";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faEye,
  faHeart,
  faShoppingBasket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CaptionBox from "../frequents/CaptionBox";
import ProductItem from "../frequents/ProductItem";
import { API_URL } from "../frequents/API";

const HighQuality = () => {
  const fetcher = (...args: Array[string]) =>
    fetch(...(args as [string])).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    API_URL + "home/high-prods",
    fetcher
  );

  if (error) return <h2>Some Error ...</h2>;

  if (isLoading)
    return (
      <Container className="py-3 text-center">
        <SkeletonTheme baseColor="#ddd" highlightColor="#fff" inline={true}>
          <Skeleton className="mx-4" width={200} height={200} count={4}></Skeleton>
        </SkeletonTheme>
      </Container>
    );

  return (
    <section className="index-high">
      <Container>
        <Row>
          <Col className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="index-high-header text-center mb-4">
              <CaptionBox
                caption={`Our High Quality Products`}
                text={`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout`}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Swiper
            navigation={{
              nextEl: ".product-swiper-next",
              prevEl: ".product-swiper-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={25}
            className="products-swiper"
            speed={600}
            breakpoints={{
              0:{
                slidesPerView: 1
              },
              576:{
                slidesPerView: 2
              },
              768:{
                slidesPerView: 3
              },
              992:{
                slidesPerView: 4
              },
              1400:{
                slidesPerView: 5
              },
            }}
          >
            {data &&
              data.map((product: object) => {
                return (
                  <SwiperSlide key={product._id}>
                    <ProductItem
                      img={`/images/${product.pictures[0].src}`}
                      name={product.name}
                      id={product._id}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      points={product.points}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
            <button className="swiper-button-next product-swiper-next">
              <FontAwesomeIcon icon={faArrowRightLong} size="sm" />
            </button>
            <button className="swiper-button-prev product-swiper-prev">
              <FontAwesomeIcon icon={faArrowLeftLong} size="sm" />
            </button>
        </Row>
      </Container>
    </section>
  );
};

export default HighQuality;
