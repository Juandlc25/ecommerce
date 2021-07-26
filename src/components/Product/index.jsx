import React from "react";
import "./style.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useRef } from "react";
import Slider from "../Slider";
import PropTypes from "prop-types";

function Product({ products }) {
  const listRef = useRef(null);
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ArrowBackIosIcon style={{ cursor: "pointer" }} onClick={scrollLeft} />
      <div className="slider-container">
        {products.length > 0 && (
          <div className="products-container" ref={listRef}>
            {Array.isArray(products) &&
              products.map((product, idx) => (
                <Slider
                  key={idx}
                  id={product.id}
                  name={product.name ? product.name : product.title}
                  price={product.price}
                  picture={
                    product.picture ? product.picture : product.thumbnail
                  }
                />
              ))}
          </div>
        )}
      </div>
      <ArrowForwardIosIcon
        style={{ cursor: "pointer" }}
        onClick={scrollRight}
      />
    </div>
  );
}

Product.propTypes = {
  Products: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Product;
