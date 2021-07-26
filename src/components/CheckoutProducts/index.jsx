import "./style.scss";
import React from "react";
import { useStateValue } from "../../contextAPI/StateProvider";
import PropTypes from "prop-types";

function CheckoutProducts({ id, name, picture, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={picture} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{name}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(3)
            .fill()
            .map((_, idx) => (
              <p key={idx}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remover del carrito</button>
      </div>
    </div>
  );
}

CheckoutProducts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
};

export default CheckoutProducts;
