import './profile.css';
import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="body">
        <div>
          <div><h1 className="Header">Dog's Profile</h1></div>
          <br />
          <br />
          <div className="lines">
            <span className="circle"></span>
          </div>
          <br />
          <br />
          <div className="gap">
            <div className="left">Dog's Name</div>
            <span className="square2"></span>

            <div className="right">Dog's Age</div>
            <span className="square3"></span>
          </div>
          <br />
          <br />
          <div className="gap">
            <div className="left">Dog's Breed</div>
            <span className="square2"></span>

            <div className="right">Dog's Gender</div>
            <span className="square3"></span>
          </div>
          <br />
          <br />
          <div className="gap">
            <div className="left">Owner's Name</div>
            <span className="square2"></span>

            <div className="right">E-mail</div>
            <span className="square3"></span>
          </div>
          <br />
          <br />
          <div className="line">
            <h1 className="left">Biography</h1>
          </div >
          <br />
          <br />
          <br />
          <span className="square"></span>
          <br />
          <br />
          <br />

        </div>
      </div>
    );
  }
}
