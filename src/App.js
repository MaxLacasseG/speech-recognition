import React, { Component } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
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
        return (
            <Container className="App container">
                <Row>
                    <Col md="6">
                        <h5>Speech Recognition app</h5>
                        <textarea name="" id="" cols="30" rows="10" />
                    </Col>
                    <Col md="6">
                        <Button onClick={this.OnStart}>Start Voice recognition</Button>
                        <Button onClick={this.OnStop}>Pause Voice recognition</Button>
                        <Button>Start Voice recognition</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
