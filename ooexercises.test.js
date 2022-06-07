describe("Vehicle Test", () => {
    it("should test to see what vehicle was created and if it beeps", () => {
        let firstVehicle = new Vehicle("Volkswagen", "Tiguan", "2022");
        expect(firstVehicle.honk()).toEqual("Beep.");
        expect(firstVehicle.toString()).toEqual("The vehicle is a Volkswagen Tiguan from 2022.");
    });
});