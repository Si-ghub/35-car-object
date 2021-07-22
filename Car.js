class Car {
    constructor(data) {
        this.data = data;
    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }

    doorsCount() {
        console.log(`${this.data.brand} has ${this.data.doors.length} doors.`);
    }

    doorsWorking() {
        //reikiamu kintamuju inicijavimas
        let workingDoorsCount = 0;

        //suskaiciuojame kiek yra veikianciu duru
        for (let i = 0; i < this.data.doors.length; i++) {
            const doors = this.data.doors[i];
            if (doors.working === true) {
                ++workingDoorsCount;
            }
        }

        //spausdiname pranesima (console.log)
        if (this.data.doors.length === workingDoorsCount) {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, and all works!`);
        } else {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, but only ${workingDoorsCount} is working. `);
        }

    }
    maxDistance() {
        const maxDistanceToTravel = this.data.tank.maxSize * 100 / this.data.fuelComsumption;
        console.log(`${this.data.brand} can travel maximum ${maxDistanceToTravel.toFixed(0)} km`);
    }

    canTravel(distance) {
        const maxToTravelWithCurrentSize = this.data.tank.currentSize * 100 / this.data.fuelComsumption;
        if (maxToTravelWithCurrentSize >= distance) {
            console.log(`${this.data.brand} can travel ${distance} km.`);
        } else {
            console.log(`${this.data.brand} can't travel 500 km, it has fuel only for ${maxToTravelWithCurrentSize.toFixed(0)} km.`);
        }
    }

    continueTravel(distance) {
        const maxToTravelWithCurrentSize = this.data.tank.currentSize * 100 / this.data.fuelComsumption;
        const extraCostforTravelMore = (distance - maxToTravelWithCurrentSize) / 100 * this.data.fuelComsumption * this.data.fuelCostPerLitre;
        if (maxToTravelWithCurrentSize >= distance) {
            console.log(`${this.data.brand} can travel ${distance} km, no extra fuel is needed.`);
        } else {
            console.log(`${this.data.brand} can't travel 500 km, you need ${extraCostforTravelMore.toFixed(2)} Euros for extra fuel.`);
        }
    }
}

module.exports = Car;