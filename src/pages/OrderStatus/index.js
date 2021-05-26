import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { getTotalPrice } from "../../utils/getTotalPrice";

export default function OrderStatus() {
  const { store } = useContext(StoreContext);
  const total = getTotalPrice(store.order);
  const isCorrect = total > 1000 ? false : true;
  return (
    <div className="container m">
      <div className="row justify-content-center ">
        <div className="col-sm-12 col-md-4  d-flex flex-column mt-5 ">
          {isCorrect ? (
            <>
              <img src="/images/happy.png" alt="" />
              <p className="text-center mt-3">
                Genial su compra se ha realizado correctamente
              </p>
            </>
          ) : (
            <>
              <img src="/images/sad.png" alt="" />
              <p className="text-center mt-3">
                Lo sentimos no podemos procesar su compra, <br />
                excede su limite de saldo
              </p>
            </>
          )}
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-8 bg-white rounded shadow-sm">
          <div className="row">
            <div className="col-sm-12 col-md-6 mt-2">
              <h5 className="text-center">Orden</h5>
              <hr />
              {store.order.map((item) => {
                if (item.price === 0) {
                }
                return (
                  <div key={item.productId} className="d-flex ">
                    <p className="">
                      <small>
                        <strong>Cantidad: </strong>
                        {item.quantity}
                        <strong> Producto: </strong>
                        {item.productName}
                        <strong> Precio: </strong>
                        {item.totalPrice} $
                      </small>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="col-sm-12 col-md-6 mt-2">
              <h5 className="text-center">Metodo de pago</h5>
              <hr />
              <p>
                <small>
                  <strong>Tarjeta: </strong>
                  {store.payment.card}
                </small>
              </p>
              <p>
                <small>
                  <strong> Dirección: </strong>
                  {store.payment.address}
                </small>
              </p>

              <p>
                <small>
                  <strong> Precio total: </strong>
                  {total} $
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
