import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import AuthPage from "../../pages/AuthPage";
import CheckoutPage from "../../pages/CheckoutPage";
import PaymentPage from "../../pages/PaymentPage";
import OrderStatus from "../../pages/OrderStatus";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/paymentmethod" component={PaymentPage} />
          <Route exact path="/order" component={OrderStatus} />
        </Switch>
      </Layout>
    </Router>
  );
}
