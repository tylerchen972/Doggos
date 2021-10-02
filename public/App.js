import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import LoginScreen from "./LoginScreen";

export default function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "nav",
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/login" },
              "Login"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/explore" },
              "Explore"
            )
          )
        )
      ),
      React.createElement(
        Switch,
        null,
        React.createElement(
          Route,
          { path: "/login" },
          React.createElement(LoginScreen, null)
        ),
        React.createElement(
          Route,
          { path: "/explore" },
          React.createElement(ExploreScreen, null)
        )
      )
    )
  );
}