export const Recognition = () => {
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        return recognition;
    } catch (e) {
        console.error(e);
        window.prompt("No browser support for speech recognition");
    }
};
