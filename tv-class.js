class TV {
    #brand;
    #channel;
    #volume;

    constructor(brand) {
        this.#brand = brand;
        this.#channel = 1;
        this.#volume = 50;
    }

    increaseVolume(dV = 5) {
        if (this.#volume + dV <= 100) {
            this.#volume += dV
        } else {
            this.#volume = 100;
        }
    }

    decreaseVolume(dV = 5) {
        if (this.#volume - dV >= 0) {
            this.#volume -= dV
        } else {
            this.#volume = 0;
        }
    }

    setChannelRandomly() {
        this.#channel = Math.ceil (Math.random() * 50 + 1);
    }

    reset() {
        this.#channel = 1;
        this.#volume = 50;
    }

    printStatus() {
        const statusMessage =
            `${this.#brand} at channel ${this.#channel}, volume ${this.#volume}`;
        console.log(statusMessage);
    }
}


const tv = new TV('CrazyTV');
tv.printStatus();
tv.increaseVolume();
tv.printStatus();
tv.increaseVolume(100);
tv.printStatus();
tv.setChannelRandomly();
tv.printStatus();
tv.reset();
tv.printStatus();
