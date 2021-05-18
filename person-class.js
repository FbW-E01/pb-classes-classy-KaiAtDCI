class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    toString() { return `${this.#name}, ${this.#age} year old.`}
}

const person = new Person('Roger Rabbit', 27);
console.log(person.toString());
