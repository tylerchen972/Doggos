import './profile.css';

function Profile() {
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
          "Profile"
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
          "Dog's Name"
        )
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "line" },
        React.createElement(
          "h1",
          { className: "center" },
          "Dog's Breed"
        )
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "line" },
        React.createElement(
          "h1",
          { className: "center" },
          "Dog's Gender"
        )
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "line" },
        React.createElement(
          "h1",
          { className: "center" },
          "Bio"
        )
      )
    )
  );
}

export default Profile;