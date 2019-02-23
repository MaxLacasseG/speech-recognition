import React, { Component } from "react";

import { Recognition } from "./classes/SpeechRecog";
import { Chrono } from "./classes/Chrono";
import { GameManager } from "./classes/GameManager";
import { colorsArray, messages } from "./data/colors";
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Recognition: new Recognition(),
            Chrono: new Chrono(30),
            GameManager: new GameManager(colorsArray, messages)
        };
    }

    componentDidMount = () => {
        const container = document.getElementById("appContainer");
        this.state.GameManager.SetContainer(container);
        this.state.GameManager.FetchNextQuestion();
    };

    render() {
        return (
            <div className="App">
                <div id="appContainer">
                    <h1>test</h1>
                </div>
            </div>
        );
    }
}

export default App;
