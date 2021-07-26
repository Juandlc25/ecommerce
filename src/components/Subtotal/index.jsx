import React from "react";
import "./style.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../contextAPI/StateProvider";
import { getBasketTotal } from "../../contextAPI/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} productos): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> Esta orden contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={() =>
          alert("Eso es todo, muchas gracias por testear esta aplicación web.")
        }
      >
        Proceder a pagar
      </button>
    </div>
  );
}

export default Subtotal;
