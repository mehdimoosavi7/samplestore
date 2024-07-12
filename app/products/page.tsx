"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterArticle from "../components/products/FilterArticle";
import axios from "axios";
import { API_URL } from "../components/frequents/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductItem from "../components/frequents/ProductItem";

const Products = () => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result: any = await axios.get(`${API_URL}product`, {});
        setData(result.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleCategory = (category?: string | null) => {
    if (category) {
      setProducts(
        data?.map((product: any) => {
          if (category == product.category[0].name) {
            return (
              <Col xl={4} xs={6} key={product._id}>
                <ProductItem
                  img={`/images/${product.pictures[0].src}`}
                  name={product.name}
                  id={product._id}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  points={product.points}
                />
              </Col>
            );
          }
        })
      );
    }
  };

  const categories: any[] = data
    ?.map((item: any) => {
      if (item.category) {
        return item.category[0]?.name;
      }
      return null;
    })
    .reduce((acc: any[], curr: any) => {
      const existingItem = acc.find((item: any) => item.name == curr);
      if (existingItem) {
        existingItem.count++;
      } else {
        acc.push({ name: curr, count: 1 });
      }
      return acc;
    }, [])
    .map((item: any, index: number) => {
      const categoryName = item && item.name;
      if (categoryName) {
        return (
          <div
            key={index}
            className="filter-link"
            onClick={() => handleCategory(categoryName)}
          >
            <div>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
              <span className="filter-link-title">{categoryName}</span>
            </div>
            <span className="filter-link-count">({item.count})</span>
          </div>
        );
      }
      return null;
    });

  // const prices = data?.map((price: any) => {
  //   const categoryRange = price.category && price.category[0]?.name;
  //   if (categoryRange) {
  //     return (
  //       <div key={price._id} className="filter-link">
  //         <FontAwesomeIcon icon={faChevronRight} size="xs" />
  //         <span className="filter-link-title">{categoryName}</span>
  //         {/* <span className="filter-link-count">({price})</span> */}
  //       </div>
  //     );
  //   }
  // });

  return (
    <section className="products-page">
      <Container>
        <Row>
          <Col lg={4} className="flex flex-col justify-start">
            {loading && (
              <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                <Skeleton
                  width={350}
                  height={250}
                  count={3}
                  inline={true}
                  containerClassName="flex flex-col justify-start gap-4"
                ></Skeleton>
              </SkeletonTheme>
            )}
            <div className="filter-articles">
              {categories && (
                <FilterArticle title="Categories" content={categories} />
              )}

              {/* {categories && (
                <FilterArticle title="price filter" content={categories} />
              )} */}
            </div>
          </Col>
          <Col xs={12} lg={8}>
            {loading && (
              <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                <Skeleton
                  width={350}
                  height={400}
                  count={4}
                  containerClassName="grid grid-cols-2 gap-4 w-100"
                  inline={true}
                ></Skeleton>
              </SkeletonTheme>
            )}
            <Row>
              {products
                ? products
                : data?.map((product: any) => {
                    return (
                      <Col xl={4} xs={6} key={product._id}>
                        <ProductItem
                          img={`/images/${product.pictures[0].src}`}
                          name={product.name}
                          id={product._id}
                          price={product.price}
                          oldPrice={product.oldPrice}
                          points={product.points}
                        />
                      </Col>
                    );
                  })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
