"use client";
import React from "react";
import CaptionBox from "../frequents/CaptionBox";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../frequents/Title";
import CommentItem from "../frequents/CommentItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useSWR from "swr";
import { API_URL } from "../frequents/API";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const fetcher = (...args: Array[string]) =>
    fetch(...(args as [string])).then((res) => res.json());

  const { data, error, isLoading } = useSWR(API_URL + "home/comment", fetcher);

  if (error) return <h2>Some Error ...</h2>;

  if (isLoading)
    return (
      <Container className="py-3 text-center">
        <SkeletonTheme baseColor="#ddd" highlightColor="#fff" inline={true}>
          <Skeleton className="mx-4" width={200} height={200} count={3}></Skeleton>
        </SkeletonTheme>
      </Container>
    );

  return (
    <section className="index-testimonials">
      <Container>
        <Row>
          <Col className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="text-center mb-5">
              <Title title={"testimonials"} />
              <CaptionBox
                caption={"Our Customers Feedback"}
                text={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout`}
                textColor={"#fff"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Swiper
            spaceBetween={20}
            className="comments-swiper"
            speed={600}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {data &&
              data.map((comment: object) => {
                return (
                  <SwiperSlide key={comment._id}>
                    <CommentItem
                      commentTitle={comment.comments[0].title}
                      commentPoints={comment.comments[0].points}
                      commentText={comment.comments[0].content}
                      commentImage={comment.photo[0].src}
                      commentUserName={comment.name}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
