class Car {
    constructor(data) {
        this.data = data;
        console.log(data);
    }
    intro() {
        console.log(`This is ${this.data.brand}.`);
    }

    doorsCount(index) {
        console.log(`${this.data.brand} has ${this.data.doors.length} doors.`);
    }

    doorsWorking() {

        console.log(`${this.data.brand} has ${this.data.doors.length} doors and all works!`);

        console.log(`${this.data.brand} has ${this.data.doors.length} doors, but only 3 is working.`);
    }

}

module.exports = Car;