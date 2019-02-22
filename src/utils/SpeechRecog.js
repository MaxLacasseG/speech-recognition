import { fail } from "assert";

export const Recognition = () => {
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        return recognition;
    } catch (e) {
        console.error(e);
        return { success: fail, message: "No browser support for speech recognition. Use Chrome." };
    }
};
