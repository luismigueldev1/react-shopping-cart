import React, { useReducer } from "react";
import { initialStore, storeReducer } from "../reducers/storeReducer";
import { StoreContext } from "../context/StoreContext";

export default function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
