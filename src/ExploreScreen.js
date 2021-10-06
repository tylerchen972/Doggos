import React from 'react';
import "./ExploreScreen.css"
export default class ExploreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // Hasans explore functionality
            //
            //
            // var likedusers = []
            // var dislikedusers = []
            // 
            //  
            //


        };
    }

    //     H code to add functionality to the explore page
    // liked() {
   //     likedusers.push(user)
     // }
   // disliked() {
   //     console.log(user)
     // }
   // }
    render() {
        return (
            // Hasans functionality 
            // <input type="button" onClick={this.disliked} value="Reject" className="rejectbutton"></input>
            //<input type="button" onClick={this.liked} value="Accept" className="acceptbutton"></input>
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
