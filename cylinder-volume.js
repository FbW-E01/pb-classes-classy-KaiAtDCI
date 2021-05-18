class Cylinder {

    #radius;
    #length;

    constructor(radius= 1, length = 1) {
        this.#radius = radius;
        this.#length = length;
    }

    getVolume() {
        const volume = Math.PI * this.#radius**2 * this.#length;
        return volume.toFixed(4);
    }
}

const cylinder1 = new Cylinder();
console.log(cylinder1.getVolume()); // 3.1416, correct

const cylinder2 = new Cylinder(2, 2); //
console.log(cylinder2.getVolume()); // 25.1327, correct
