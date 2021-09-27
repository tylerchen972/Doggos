// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import App from "./App.js";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "greenbox" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: "Header" },
          "Login"
        )
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "line" },
        React.createElement(
          "h1",
          { className: "center" },
          "Username"
        ),
        React.createElement("input", { "class": "centerTextbox", placeholder: "Enter your Username", type: "text" })
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "line" },
        React.createElement(
          "h1",
          { className: "center" },
          "Password"
        ),
        React.createElement("input", { placeholder: "Enter your Password", type: "text" })
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("input", { type: "button", value: "Login", className: "loginbutton" })
    )
  );
}

ReactDOM.render(React.createElement(
  React.StrictMode,
  null,
  React.createElement(App, null)
), document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();