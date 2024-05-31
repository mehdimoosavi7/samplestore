"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import useSWR from "swr";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { API_URL } from "../frequents/API";
import { Console } from "console";

const TopSlider = () => {
  const fetcher = (...args: Array<string>) =>
    fetch(...(args as [string])).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    API_URL + "home/top-slider",
    fetcher
  );

  if (error) return <h2>Some Error ...</h2>;

  if (isLoading)
    return (
      <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
        <Skeleton height={1000}></Skeleton>
      </SkeletonTheme>
    );

  return (
    <>
      <Swiper
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        speed={2500}
        loop={true}
        modules={[Pagination, EffectFade]}
        className="top-slider-swiper"
        autoHeight={false}
        // style={{height: window.innerHeight}}
      >
        {data &&
          data.map((banner: any) => {
            return (
              <SwiperSlide key={banner._id}>
                <div className="top-slider-textBox">
                  <Container>
                    <h1
                      className="top-slider-textBox-title"
                      data-animate="title"
                    >
                      {banner.title}
                    </h1>
                    <h3
                      className="top-slider-textBox-subtitle"
                      data-animate="subtitle"
                    >
                      {banner.subtitle}
                    </h3>
                    <Link
                      className="top-slider-textBox-button feature-link"
                      href={`/products/${banner.link}`}
                      data-animate="link"
                    >
                      View More
                    </Link>
                  </Container>
                </div>
                <Image
                  src={`/images/banners/${banner.image}`}
                  alt="banner"
                  fill={true}
                  sizes="(max-width:576px) 100%, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default TopSlider;
