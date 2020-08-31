import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import AppRoute from "./AppRout";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div></div>
        <AppRoute></AppRoute>
      </div>
    </Provider>
  );
};

export default App;
