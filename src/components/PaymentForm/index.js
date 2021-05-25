import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { StoreContext } from "../../context/StoreContext";
import { storeTypes } from "../../types/storeTypes";
import { useHistory } from "react-router";

export default function PaymentForm() {
  const [values, handleInputChange] = useForm({
    card: "1234 5678 9101 1121",
    month: "01",
    year: "2022",
    cvv: "123",
    address: "San Cristobal, Venezuela",
  });
  const history = useHistory();

  const { dispatch } = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: storeTypes.setPayment,
      payload: { ...values },
    });
    history.push("/order");
  };

  return (
    <div className="row">
      <div className="col-sm-12 ">
        <form
          className="p-5 mt-3 rounded shadow-sm row"
          style={{ backgroundColor: "white" }}
          onSubmit={handleSubmit}
        >
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="card" className="form-label">
                Numero de tarjeta
              </label>
              <input
                type="text"
                className="form-control"
                name="card"
                value={values.card}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="month" className="form-label">
                Mes
              </label>
              <input
                type="number"
                className="form-control"
                name="month"
                value={values.month}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Año
              </label>
              <input
                type="number"
                className="form-control"
                name="year"
                value={values.year}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="number"
                className="form-control"
                name="cvv"
                value={values.cvv}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Dirección de envio
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Completar compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
