import React, { useEffect, useState } from "react";
import { MOST_WANTED_PRODUCTS } from "../../constants";
import "./style.scss";

import Product from "../Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/categories/MCO1430")
      .then((response) => response.json())
      .then((data) =>
        setProducts((prevItems) => [
          ...prevItems,
          {
            id: data.id,
            name: data.name,
            picture: data.picture,
            price: data.settings.minimum_price,
          },
        ])
      );
    fetch("https://api.mercadolibre.com/categories/MCO118376")
      .then((response) => response.json())
      .then((data) =>
        setProducts((prevItems) => [
          ...prevItems,
          {
            id: data.id,
            name: data.name,
            picture: data.picture,
            price: data.settings.minimum_price,
          },
        ])
      );
    fetch("https://api.mercadolibre.com/categories/MCO157296")
      .then((response) => response.json())
      .then((data) =>
        setProducts((prevItems) => [
          ...prevItems,
          {
            id: data.id,
            name: data.name,
            picture: data.picture,
            price: data.settings.minimum_price,
          },
        ])
      );
    fetch("https://api.mercadolibre.com/categories/MCO157280")
      .then((response) => response.json())
      .then((data) =>
        setProducts((prevItems) => [
          ...prevItems,
          {
            id: data.id,
            name: data.name,
            picture: data.picture,
            price: data.settings.minimum_price,
          },
        ])
      );
  }, []);

  return (
    <div className="products">
      <h2>{MOST_WANTED_PRODUCTS}</h2>
      <Product products={products} />
    </div>
  );
}

export default Products;
