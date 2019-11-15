// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();

        // Define the initial state:
        this.state = {
            timesClicked: 0
        };
    }
    handleClick = () => {
        // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
        let newtimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: newtimesClicked
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.timesClicked}
            </button>
        );
    }
}
