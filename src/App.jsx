import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import ScrollToTop from "./Utils/ScrollToTop";
import { toast, ToastContainer } from "react-toastify";
import { PageNotFound } from "./Layouts/PageNotFound";
import { Dashboard } from "./Modules/Dashboard";
import { EditPolicy } from "./Modules/EditPolicy";
import { Header } from "./Layouts/Header";
import { Footer } from "./Layouts/Footer";
import { AllPolicies } from "./Modules/AllPolicies";
import { PoliciesService } from "./Services/PoliciesService";
import { reject, resolve } from "q";
import { PageLoader } from "./Layouts/PageLoader";

export const App = () => {
  const dispatch = useDispatch();

  const [pageLoader, setPageLoader] = useState(true);

  useEffect(() => {
    PoliciesService.GetAllPolicies()
      .then((response) => {
        let apiResult = response?.data;
        if (apiResult.result === "success") {
          let allPolicies = apiResult?.apiData;
          dispatch({ type: "INITIALIZE_DATA", payload: allPolicies });
        } else {
          toast.error(`${apiResult.message}`);
        }
        setPageLoader(false);
        resolve();
      })
      .catch((err) => {
        setPageLoader(false);
        toast.error(`Server Error: ${err}`);
        reject();
      });
    return () => {};
  });

  if (pageLoader) {
    return <PageLoader />;
  } else {
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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/all-policies" component={AllPolicies} />
          <Route exact path="/policy/:id" component={EditPolicy} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
};
