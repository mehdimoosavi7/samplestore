"use client";
import React, { useEffect } from "react";
import CaptionBox from "../frequents/CaptionBox";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../frequents/Title";
import useSWR from "swr";
import { API_URL } from "../frequents/API";
import BlogItem from "../frequents/BlogItem";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Aos from "aos";

const Blogs = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const fetcher = (...args: Array[string]) =>
    fetch(...(args as [string])).then((res) => res.json());

  const { data, error, isLoading } = useSWR(API_URL + "home/blog", fetcher);

  if (error) return <h2>Some Error ...</h2>;

  if (isLoading)
    return (
      <Container className="py-3 text-center">
        <SkeletonTheme baseColor="#ddd" highlightColor="#fff" inline={true}>
          <Skeleton
            className="mx-4"
            width={200}
            height={300}
            count={3}
          ></Skeleton>
        </SkeletonTheme>
      </Container>
    );

  return (
    <section className="index-blogs">
      <Container>
        <Row>
          <Col className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="index-blogs-header text-center mb-5">
              <Title title={"latest news"} />
              <CaptionBox
                caption={"Reading Our Blog Content"}
                text={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout`}
              />
            </div>
          </Col>
        </Row>
        <Row>
          {data &&
            data.map((blog: object , index : Number) => {
              return (
                <Col
                  xl={4}
                  md={6}
                  sm={12}
                  key={blog._id}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={index*200}
                >
                  <BlogItem
                    blogTitle={blog.title}
                    blogText={blog.content}
                    blogImage={blog.pictures[0].src}
                    blogAuthor={blog.author[0].name}
                    blogId={blog._id}
                    blogDate={blog.date}
                    blogCommentsCount={
                      blog.comments[0] ? blog.comments[0].count : "no comment"
                    }
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
