import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./Utils/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { PageNotFound } from "./Layouts/PageNotFound";
import { Dashboard } from "./Modules/Dashboard";
import { EditPolicy } from "./Modules/EditPolicy";
import { Header } from "./Layouts/Header";
import { Footer } from "./Layouts/Footer";
import { AllPolicies } from "./Modules/AllPolicies";

export const App = () => {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ScrollToTop />
      <Header />
      <Switch>
      <Route exact path="/" component={AllPolicies} />
        {/* <Route exact path="/" component={Dashboard} /> */}
        {/* <Route exact path="/all-policies" component={AllPolicies} /> */}
        <Route exact path="/policy/:id" component={EditPolicy} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
};
