export class GameManager {
    constructor(colorsArray, messages) {
        this.points = 0;
        this.colorsArray = colorsArray;
        this.messages = messages;
        this.container = "";
    }

    SetContainer = container => {
        this.container = container;
    };

    StartGame = () => {
        console.log("start");
    };

    EndGame = () => {
        console.log("end");
    };

    PauseGame = () => {
        console.log("end");
    };

    LoadQuestions = () => {};

    FetchNextQuestion = () => {
        const text = document.createTextNode(this.colorsArray[0]);
        this.container.appendChild(text);
    };

    CheckIfLastQuestion = () => {};
}
