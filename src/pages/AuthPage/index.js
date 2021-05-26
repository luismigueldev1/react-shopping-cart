import React, { useContext, useState } from "react";
import RegisterForm from "../../components/RegisterForm/";
import { StoreContext } from "../../context/StoreContext";
import { storeTypes } from "../../types/storeTypes";

export default function AuthPage({ history }) {
  const [isRegister, setIsRegister] = useState(false);
  const store = useContext(StoreContext);

  const handleIsRegister = () => {
    setIsRegister(!isRegister);
  };

  const handleIsInvited = () => {
    store.dispatch({
      type: storeTypes.login,
      payload: {
        email: "invitado",
      },
    });
    history.push("/checkout");
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-10 col-md-4  d-flex flex-column mt-5">
          <h3 className="text-center">Autenticación</h3>
          {!isRegister ? (
            <>
              <button
                className="btn btn-primary  mt-3"
                onClick={handleIsRegister}
              >
                Registrarse
              </button>
              <button
                className="btn btn-secondary  mt-3"
                onClick={handleIsInvited}
              >
                Invitado
              </button>
            </>
          ) : (
            <RegisterForm setIsRegister={setIsRegister} />
          )}
        </div>
      </div>
    </div>
  );
}
