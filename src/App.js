import './App.css';

function App() {
  //Task # 17 html/css
  return (
    <div>
      <div className = "greenbox">
      <div><h1 className="Header">Login</h1></div>
      <br />
      <br />
      <br />
      <br />
      <div className = "line">
      <h1 className= "center">Username</h1>
      <input class = "centerTextbox" placeholder = "Enter your Username" type="text"></input>
      </div>
      <br />
      <br />
      <div className = "line">
      <h1 className = "center">Password</h1>
      <input placeholder = "Enter your Password" type="text"></input>
      </div >
      <br />
      <br />
      <br />
        <input type="button" value = "Login"className = "loginbutton"></input>
        </div>
    </div>
  );
}

export default App;
