import React, { useContext } from "react";
import CheckoutList from "../../components/CheckoutList";
import { StoreContext } from "../../context/StoreContext";
import { getTotalPrice } from "../../utils/getTotalPrice";

export default function CheckoutPage({ history }) {
  const { store } = useContext(StoreContext);

  const handleGoToPayment = () => {
    if (totalPrice === 0) {
      return alert("Debe de añadir almenos 1 producto");
    }
    history.push("/paymentmethod");
  };

  const totalPrice = getTotalPrice(store.order);

  return (
    <div className="container m">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-7  d-flex flex-column mt-5">
          <h3 className="text-center">Carrito de compras</h3>

          <CheckoutList />
          <hr />
        </div>
      </div>

      <div className="row justify-content-center align-items-start">
        <div className="col-sm-12 col-md-3">
          {store.order.length >= 1 ? (
            store.order.map((item) => {
              if (item.quantity === 0) {
                return "";
              } else {
                return (
                  <p className="text-end" key={item.productId}>
                    <small>
                      {item.quantity} - {item.productName}
                    </small>
                  </p>
                );
              }
            })
          ) : (
            <p></p>
          )}

          {totalPrice !== 0 ? (
            <>
              <hr />
              <p className="text-end">
                <strong>
                  Total:
                  {store.order[0].totalPrice + store.order[1].totalPrice} $
                </strong>
              </p>
            </>
          ) : (
            <p></p>
          )}
        </div>
        <div className="col-sm-12 col-md-4 text-end">
          <button className="btn btn-success" onClick={handleGoToPayment}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
