import React from 'react';
import './LoginScreen.css';
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.clicked = this.clicked.bind(this)
    }

    clicked() {
        console.log(this.state.username)
    }
    setUsername = (event) => {
        this.setState({
            username: event.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                <div className="greenbox">
                    <div><h1 className="Header">Login</h1></div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                        <h1 className="center">Username</h1>
                        <input class="centerTextbox" onChange={this.setUsername} placeholder="Enter your Username" value={this.state.username} type="text"></input>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1 className="center">Password</h1>
                        <input class="centerTextbox" onChange={this.state.password} placeholder="Enter your Password" type="text"></input>
                    </div >
                    <br />
                    <br />
                    <br />
                    <input type="button" onClick={this.clicked} value="Login" className="loginbutton"></input>
                </div>
            </div>
        );
    }
}
