import "./style.scss";
import React from "react";
import { useStateValue } from "../../contextAPI/StateProvider";
import CheckoutProducts from "../../components/CheckoutProducts";
import Subtotal from "../../components/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        {basket?.length === 0 ? (
          <div>
            <h2>El carrito de compras está vacío.</h2>
            <p>
              No tienes ningún producto en el carrito de compras. Para comprar
              uno o más productos, click 'Agregar al carrito' cerca del item.
            </p>
          </div>
        ) : (
          <>
            <h2 className="checkout-title">
              Productos en el carrito de compras:
            </h2>

            {basket.map((item, idx) => (
              <CheckoutProducts
                id={item.id}
                key={idx}
                name={item.name}
                picture={item.picture}
                price={item.price}
              />
            ))}
          </>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-bottom">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
