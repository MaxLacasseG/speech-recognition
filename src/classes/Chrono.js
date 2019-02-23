export class Chrono {
    constructor(duration) {
        this.duration = duration;
        this.time = duration;
        this.interval = null;
    }

    Start = () => {
        this.interval = window.setInterval(this.DecreaseTime, 1000);
    };

    Stop = () => {
        window.clearInterval(this.interval);
    };

    Reset = () => {
        this.time = this.duration;
    };

    DecreaseTime = () => {
        console.log(this.time);
        if (this.time <= 0) this.Stop();
        this.time--;
    };
}
