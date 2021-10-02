import React from 'react';
import "./ExploreScreen.css"
export default class ExploreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <div className="body">
                    <br />
                    <br />
                    <br />
                    <div>
                        <img src="https://www.w3schools.com/images/picture.jpg" alt="A white dog" className="image"></img>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="test">
                        <input type="button" value="Reject" className="rejectbutton"></input>
                        <input type="button" value="Accept" className="acceptbutton"></input>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}
