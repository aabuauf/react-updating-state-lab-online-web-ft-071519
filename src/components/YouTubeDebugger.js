// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        // Define the initial state:
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }

    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="bitrate">

                </button>

                <button onClick={this.handleClickResolution} className="resolution">

                </button>
            </div>
        );
    }
}