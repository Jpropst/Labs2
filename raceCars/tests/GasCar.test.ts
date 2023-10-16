import GasCar from "../src/GasCar";

describe("GasCar", () => {
    it("sets the team and fuel properties from the constructor", () => {
        const teamName = "The Combustors";
        const fuelAmount = 19;
        const gasCar = new GasCar(teamName, fuelAmount);
        expect(gasCar.team).toBe(teamName);
        expect(gasCar.fuel).toBe(fuelAmount);
    });
    it("defaults fuel to 10 when the second constructor param is omitted", () => {
        const gasCar = new GasCar("The Combustors");
        expect(gasCar.fuel).toBe(10);
    });
    it("starts w/ the speed property set at 0", () => {
        const gasCar = new GasCar("The Combustors");
        expect(gasCar.speed).toBe(0);
    });
    it("brings the speed up to 2 when calling 'accelerate'", () => {
        const gasCar = new GasCar("The Combustors");
        gasCar.accelerate();
        expect(gasCar.speed).toBe(2);
    });
    it("brings speed up to 4 when calling 'accelerate' twice", () => {
        const gasCar = new GasCar("The Combustors");
        gasCar.accelerate();
        gasCar.accelerate();
        expect(gasCar.speed).toBe(4);
    });
    it("reduces fuel by 1 (from default = 10) when calling 'accelerate'", () => {
        const gasCar = new GasCar("The Combustors");
        gasCar.accelerate();
        expect(gasCar.fuel).toBe(9);
    });
    it("reduces fuel by 2 when calling 'accelerate' twice", () => {
        const gasCar = new GasCar("The Combustors");
        gasCar.accelerate();
        gasCar.accelerate();
        expect(gasCar.fuel).toBe(8);
    });
    it("returns true when fuel is 0 for 'isFuelEmpty", () => {
        const gasCar = new GasCar("The Combustors", 0);
        expect(gasCar.isFuelEmpty()).toBe(true);
    });
    it("it returns false when fuel is greater than 0 for 'isFuelEmpty", () => {
        const gasCar = new GasCar("The Combustors", 8);
        expect(gasCar.isFuelEmpty()).toBe(false);
    });
});