import './App.css';

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

export default App;