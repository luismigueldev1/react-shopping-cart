import React from "react";
import PaymentForm from "../../components/PaymentForm";

export default function PaymentPage() {
  return (
    <div className="container m">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <h3 className="text-center mt-5">Metodo de pago</h3>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
