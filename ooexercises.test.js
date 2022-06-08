describe("Vehicle Test", () => {
    it("should test to see what vehicle was created and if it beeps", () => {
        let firstVehicle = new Vehicle("Volkswagen", "Tiguan", "2022");
        expect(firstVehicle.honk()).toEqual("Beep.");
        expect(firstVehicle.toString()).toEqual("The vehicle is a Volkswagen Tiguan from 2022.");
    });
});

describe("Car Test", () => {
    it("should test to see that vehicle was created, if it inherits everything and has 4 wheels", () => {
        let firstCar = new Car("Volkswagen", "Tiguan", "2022");
        expect(firstCar.honk()).toEqual("Beep.");
        expect(firstCar.toString()).toEqual("The vehicle is a Volkswagen Tiguan from 2022.");
        expect(firstCar.numWheels()).toEqual(4);
    });
});
describe("Motorcycle Test", () => {
    it("should test to see that vehicle was created, if it inherits everything and has 2 wheels", () => {
        let firstBike = new Motorcycle("Ducati", "T-series", "2022");
        expect(firstBike.honk()).toEqual("Beep.");
        expect(firstBike.toString()).toEqual("The vehicle is a Ducati T-series from 2022.");
        expect(firstBike.numWheels()).toEqual(2);
        expect(firstBike.revEngine()).toEqual("VROOM!!!")
    });
});