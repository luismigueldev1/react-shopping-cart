import React from "react";
import AppRouter from "./routes/AppRouter";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
