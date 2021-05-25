import React, { useContext } from "react";
import CheckoutList from "../../components/CheckoutList";
import { StoreContext } from "../../context/StoreContext";

export default function CheckoutPage({ history }) {
  const { store } = useContext(StoreContext);

  const handleGoToPayment = () => {
    history.push("/paymentmethod");
  };
  return (
    <div className="container m">
      <div className="row justify-content-center align-items-center">
        <div className="col-7  d-flex flex-column mt-5">
          <h3 className="text-center">Carrito de compras</h3>

          <CheckoutList />
          <hr />
        </div>
      </div>

      <div className="row justify-content-center align-items-start">
        <div className="col-3 ">
          {store.order.length >= 1 &&
            store.order.map((item) => (
              <p className="text-end" key={item.productId}>
                <small>
                  {item.quantity} - {item.productName}
                </small>
              </p>
            ))}
          <hr />
          {(store.order[0].totalPrice || store.order[1].totalPrice) && (
            <p className="text-end">
              <strong>
                Total:
                {store.order[0].totalPrice + store.order[1].totalPrice} $
              </strong>
            </p>
          )}
        </div>
        <div className="col-4 text-end">
          <button className="btn btn-success" onClick={handleGoToPayment}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
