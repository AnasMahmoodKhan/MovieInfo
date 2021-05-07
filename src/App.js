import React from "react";
import { Provider } from "react-redux";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar/Navbar";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <Navbar />
    <div>Home</div>
    <Footer />
  </Provider>
);

export default App;
