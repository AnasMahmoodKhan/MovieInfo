import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Landing from "./containers/Landing";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar/Navbar";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Footer />
    </Router>
  </Provider>
);

export default App;
