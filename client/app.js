import '../public/style.css';
import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

const root = createRoot(document.getElementById("app")); // make sure this is the same as the id of the div in your index.html

root.render(<Provider store={store}>{<div>Hello, world!</div>}</Provider>);

// ReactDOM.render(
//   <Provider store={store}>{<div>Hello, world!</div>}</Provider>,
//   document.getElementById("app") // make sure this is the same as the id of the div in your index.html
// );
