import React, { Component } from "react";
import Content from "./components/Content";
import { Recognition } from "./utils/SpeechRecog";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recognition: Recognition()
        };
    }

    OnStart = () => {
        this.state.recognition.start();
    };
    OnStop = () => {
        this.state.recognition.stop();
    };

    render() {
        let content = null;
        if (this.state.recognition.success !== undefined) {
            content = <div>{this.state.recognition.message}</div>;
        } else {
            content = <Content recognition={this.recognition} OnStart={this.OnStart} OnStop={this.OnStop} />;
        }
        return <div className="App">{content}</div>;
    }
}

export default App;
