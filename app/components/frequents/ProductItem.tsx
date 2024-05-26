import { faEye, faHeart, faShoppingBasket, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({
  img,
  name,
  id,
  price,
  oldPrice,
  points,
}: { string }) => {
  return (
    <>
      <div className="product-slide">
        <div className="product-img-box">
          <Image src={img} alt={name} width={230} height={230} />
          {points && (
            <span className="product-point">
              <FontAwesomeIcon icon={faStar} />
              {points}
            </span>
          )}
        </div>
        <h3 className="product-name">
          <Link href={`/product/${id}`}>{name}</Link>
        </h3>
        <p className="product-price">
          {"$" + price}
          {oldPrice && <span className="discount">{"$" + oldPrice}</span>}
        </p>
        <div className="product-buttons">
          <span className="product-button">
            <button>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </span>
          <span className="product-button">
            <button>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
          </span>
          <span className="product-button">
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
