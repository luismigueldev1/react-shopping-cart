import React, { useContext } from "react";
import { useHistory } from "react-router";
import { StoreContext } from "../../context/StoreContext";
import { useForm } from "../../hooks/useForm";
import { storeTypes } from "../../types/storeTypes";

export default function RegisterForm({ setIsRegister }) {
  const [values, handleInputChange] = useForm({
    email: "luismiguel@mail.com",
    password: "123456",
  });
  const history = useHistory();

  const store = useContext(StoreContext);

  const handlePushToCheckout = () => {
    setIsRegister((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: storeTypes.login,
      payload: {
        email: values.email,
      },
    });
    history.push("/checkout");
  };

  return (
    <div className="row">
      <div className="col-sm-12 ">
        <form
          className="p-5 mt-3 rounded shadow-sm row "
          style={{ backgroundColor: "white" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
            <span className="btn btn-link mt-3" onClick={handlePushToCheckout}>
              Ingresar como invitado
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
