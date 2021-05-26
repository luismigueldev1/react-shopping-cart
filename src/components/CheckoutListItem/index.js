import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useCounter } from "../../hooks/useCounter";
import { storeTypes } from "../../types/storeTypes";

export default function CheckoutListItem({ product }) {
  const { dispatch } = useContext(StoreContext);
  const [counter, increment, decrement] = useCounter(1);

  const handleIncrement = () => {
    increment();

    dispatch({
      type: storeTypes.modifyQuantity,
      payload: {
        productId: product.id,
        productName: product.name,
        quantity: counter + 1,
        totalPrice: parseInt(product.price) * (counter + 1),
      },
    });
  };

  const handleDecrement = () => {
    decrement();
    if (counter <= 0) {
      return;
    }
    dispatch({
      type: storeTypes.modifyQuantity,
      payload: {
        productId: product.id,
        productName: product.name,
        quantity: counter - 1,
        totalPrice: parseInt(product.price) * (counter - 1),
      },
    });
  };

  return (
    <div className="bg-white p-3 shadow-sm mb-2 ">
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <img src={product.imageSrc} alt={product.name} />
        </div>

        <div className="col-sm-12 col-md-6">
          <p>
            <strong> {product.name}</strong>
          </p>

          <p>
            <small>{product.description}</small>
          </p>
        </div>

        <div className="col-sm-12 col-md d-flex flex-column justify-content-between">
          <div className="prices ">
            <p className="text-end mb-1">
              <small>
                <span>Precio por unidad:</span>
                <strong> {product.price}$</strong>
              </small>
            </p>

            <p className="text-end">
              <small>
                <span>Precio total:</span>
                <strong> {parseInt(product.price) * counter}$</strong>
              </small>
            </p>
          </div>
          <div className="counter align-self-end">
            <div className="d-flex">
              <div
                className="circle bg-danger pointer me-2"
                onClick={handleDecrement}
              >
                <i className="fas fa-minus"></i>
              </div>
              <p className="text-end">
                <small>
                  <strong>{counter}</strong>
                </small>
              </p>
              <button
                className="circle bg-primary pointer ms-2"
                onClick={handleIncrement}
              >
                <i className="fas fa-plus "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
