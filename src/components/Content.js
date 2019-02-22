import React, { Component } from "react";
import { Chrono } from "../utils/Chrono";
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Chrono: new Chrono(20)
        };
    }
    componentDidMount() {
        //this.state.Chrono.Start();
    }

    render() {
        return (
            <div className="d-flex h-100 justify-content-center align-content-stretch flex-column">
                <div className="d-flex flex-column justify-content-center align-content-center flex-grow-1 flex-fill flex-shrink-0 bg-danger">
                    <div className="colorArea border border-info h-50 w-50 mx-auto mb-5" />
                    <h2>Name the right color</h2>
                </div>
                <div className="flex-grow-0 flex-shrink-1 bg-dark p-4">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <h5>Controls</h5>
                        </div>
                    </div>
                    <div className="btn btn-secondary mx-4" onClick={this.props.OnStart}>
                        <span>
                            <i className="fas fa-play" />
                        </span>
                    </div>
                    <div className="btn btn-light  mx-4" onClick={this.props.OnStop}>
                        {" "}
                        <span>
                            <i className="fas fa-stop" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
