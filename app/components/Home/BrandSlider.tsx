"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useSWR from "swr";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import { API_URL } from "../frequents/API";

const BrandSlider = () => {
  const fetcher = (...args: Array<string>) =>
    fetch(...(args as [string])).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    API_URL + "home/brand-slider",
    fetcher
  );

  if (error) return <h2>Some Error ...</h2>;

  if (isLoading)
    return (
      <Container className="py-3 text-center">
        <SkeletonTheme baseColor="#ddd" highlightColor="#fff" inline={true}>
          <Skeleton width={200} height={200} count={4} className="mx-4"></Skeleton>
        </SkeletonTheme>
      </Container>
    );

  return (
    <section className="index-brands">
      <Container>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={20}
          speed={2500}
          loop={true}
          modules={[Autoplay]}
          className="brands-swiper"
        >
          {data &&
            data.map((brand: any) => {
              return (
                <SwiperSlide key={brand._id}>
                  <Image
                    src={`/images/brands/${brand.logo}`}
                    alt={brand.name}
                    width={160}
                    height={160}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </section>
  );
};

export default BrandSlider;
