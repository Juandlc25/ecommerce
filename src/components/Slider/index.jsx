import "./style.scss";
import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../../contextAPI/StateProvider";
import PropTypes from "prop-types";

function Slider({ picture, id, name, price }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        picture,
        name,
        price,
      },
    });
  };
  return (
    <div className="slider-product">
      <div className="slider-product-image">
        <img src={picture} alt={`img-${id}`} />
        <div className="slider-product-image-discount">-50%</div>
      </div>

      <div className="slider-product-details">
        <span>{name}</span>
        <div>
          <span>${price}</span>
          <span>${price / 2}</span>
        </div>
        <button onClick={addToBasket} className="slider-product-details-btn">
          <ShoppingCartOutlinedIcon /> Agregar al carrito
        </button>
      </div>
    </div>
  );
}

Slider.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
};

export default Slider;
