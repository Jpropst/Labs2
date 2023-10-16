import SolarCar from "../src/SolarCar";
import { findAverageSpeed } from "../src/racer-functions";

describe("SolarCar", () => {
    it("sets the team property from the constructor", () => {
        const teamName = "Suns";
        const solarCar = new SolarCar(teamName);
        expect(solarCar.team).toBe(teamName);
    });
    it("starts w/ the speed property set at 0", () => {
        const solarCar = new SolarCar("Suns");
        expect(solarCar.speed).toBe(0);
    });
    it("adds one to speed when 'accelerate' is called", () => {
        const solarCar = new SolarCar("Suns");
        solarCar.accelerate()
        expect(solarCar.speed).toBe(1);
    });
    it("adds one to speed when you call 'acelerate' more than once", () => {
        const solarCar = new SolarCar("Suns");
        solarCar.accelerate()
        solarCar.accelerate()
        expect(solarCar.speed).toBe(2);
    });
    it("returns false when 'isFuelEmpty' is called", () => {
        const solarCar = new SolarCar("Suns");
        const fuel = solarCar.isFuelEmpty();
        expect(fuel).toBe(false);
    });
});