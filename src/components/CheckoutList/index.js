import React, { useContext } from "react";
import CheckoutListItem from "../CheckoutListItem";

import { StoreContext } from "../../context/StoreContext";

export default function CheckoutList() {
  const { store } = useContext(StoreContext);
  return (
    <div>
      {store?.products.map((product) => (
        <div className="mt-3" key={product.id}>
          <CheckoutListItem product={product} />
        </div>
      ))}
    </div>
  );
}
