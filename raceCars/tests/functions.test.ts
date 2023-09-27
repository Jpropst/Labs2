import { findRacersWithEmptyFuel } from "../src/racer-functions";
import { findAverageSpeed } from "../src/racer-functions";
import { getFasterRacer } from "../src/racer-functions";
import SolarCar from "../src/SolarCar";
import GasCar from "../src/GasCar";
import Racer from "../src/Racer";

// for ea. test case, create an array of racers
// call 'findRacersWithEmptyFuel w/ this array and confirm the correct result
describe("findRacersWithEmptyFuel", () => {
    it("returns an array of 'GasCar'  where SOME have no fuel", () => {
        const gasCar1 = new GasCar("Ford Taurus", 0);
        const gasCar2 = new GasCar("Ford Fusion", 5);
        const solarCar1 = new SolarCar("Stella");
        const racers = [gasCar1, gasCar2, solarCar1];

        const result = findRacersWithEmptyFuel(racers);

        expect(result).toContain(gasCar1);
        expect(result).not.toContain(gasCar2);
        expect(result).not.toContain(solarCar1);
    });
    it("returns an array of'GasCar' where all have no fuel", () => {
        const gasCar1 = new GasCar("Ford Taurus", 0);
        const gasCar2 = new GasCar("Ford Fusion", 0);
        const gasCar3 = new GasCar("Ford F-150", 0);
        const gasCar4 = new GasCar("Ford Bronco", 0);
        const racers = [gasCar1, gasCar2, gasCar3, gasCar4];

        const result = findRacersWithEmptyFuel(racers);

        expect(result).toContain(gasCar1);
        expect(result).toContain(gasCar2);
        expect(result).toContain(gasCar3);
        expect(result).toContain(gasCar4);
    });
    it("returns an array of 'GasCar' where none have no fuel (expect empty array)", () => {
        const gasCar1 = new GasCar("Ford Taurus", 7);
        const gasCar2 = new GasCar("Ford Fusion", 8);
        const gasCar3 = new GasCar("Ford F-150", 4);
        const gasCar4 = new GasCar("Ford Bronco", 5);
        const racers = [gasCar1, gasCar2, gasCar3, gasCar4];
        const result = findRacersWithEmptyFuel(racers);

        expect(result).toEqual([]);
    });
    it("returns an array of 'SolarCar' (expect empty array)", () => {
        const solarCar1 = new SolarCar("Stella");
        const solarCar2 = new SolarCar("Lightyear One");
        const solarCar3 = new SolarCar("Sono Motors Sion");
        const solarCar4 = new SolarCar("Nuna");
        const racers = [solarCar1, solarCar2, solarCar3, solarCar4];
        const result = findRacersWithEmptyFuel(racers);

        expect(result).toEqual([]);
    });
    it("returns an array w/ a mix of 'GasCar' and 'SolarCar' w/ diff. speeds", () => {
        const gasCar1: Racer = {
            team: "Ford Taurus",
            speed: 100,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const gasCar2: Racer = {
            team: "Ford Fusion",
            speed: 80,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const solarCar1: Racer = {
            team: "Stella",
            speed: 75,
            accelerate: () => {},
            isFuelEmpty: () => true,
        };
        const solarCar2: Racer = {
            team: "Lightyear One",
            speed: 95,
            accelerate: () => {},
            isFuelEmpty: () => true,
        };
        const racers = [gasCar1, gasCar2, solarCar1, solarCar2];
        const result = findRacersWithEmptyFuel(racers);
        expect(result.length).toBe(2);
    });
    it("returns an empty array", () => {
        const racers: Racer[] = [];
        const result = findRacersWithEmptyFuel(racers);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
    });
});

describe("findAverageSpeed", () => {
    it("returns the average speed of an array of 'GasCar' w/ diff. speeds", () => {
        const gasCar1: Racer = {
            team: "Ford Taurus",
            speed: 100,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const gasCar2: Racer = {
            team: "Ford Fusion",
            speed: 80,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const gasCar3: Racer = {
            team: "Ford Bronco",
            speed: 75,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const gasCar4: Racer = {
            team: "Ford F-150",
            speed: 95,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const racers: Racer[] = [gasCar1, gasCar2, gasCar3, gasCar4];
        const result = findAverageSpeed(racers);
        expect(result).toBe(87.5);
    });
    it("returns an array w/ a mix of 'GasCar' and 'SolarCar' w/ diff. speeds", () => {
        const gasCar1: Racer = {
            team: "Ford Taurus",
            speed: 100,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const solarCar1: Racer = {
            team: "Stella",
            speed: 75,
            accelerate: () => {},
            isFuelEmpty: () => true,
        };
        const solarCar2: Racer = {
            team: "Lightyear One",
            speed: 95,
            accelerate: () => {},
            isFuelEmpty: () => true,
        };
        const racers: Racer[] = [gasCar1, solarCar1, solarCar2];
        const result = findAverageSpeed(racers);
        expect(result).toBe(90);
    });
    it("returns an array of cars that all have a speed of 0 (expect 0)", () => {
        const gasCar1: Racer = {
            team: "Ford Taurus",
            speed: 0,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const solarCar1: Racer = {
            team: "Stella",
            speed: 0,
            accelerate: () => {},
            isFuelEmpty: () => true,
        };
        const solarCar2: Racer = {
            team: "Lightyear One",
            speed: 0,
            accelerate: () => {},
            isFuelEmpty: () => true,
        };
        const racers: Racer[] = [gasCar1, solarCar1, solarCar2];
        const result = findAverageSpeed(racers);
        expect(result).toBe(0)
    });
    it("returns an empty array (expect 0)", () => {
        const racers: Racer[] = [];
        const result = findAverageSpeed(racers);
        expect(result).toBe(0);
    });
});

describe("getFasterRacer", () => {
    it("returns racerA as the fastest racer", () => {
        const racerA: Racer = {
            team: "Ford Taurus",
            speed: 100,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const racerB: Racer = {
            team: "Ford Fusion",
            speed: 80,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const fastest = getFasterRacer(racerA, racerB);
        expect(fastest).toBe(racerA);
    });
    it("returns racerB as the fastest racer", () => {
        const racerA: Racer = {
            team: "Ford Taurus",
            speed: 80,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const racerB: Racer = {
            team: "Ford Fusion",
            speed: 100,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const fastest = getFasterRacer(racerA, racerB);
        expect(fastest).toBe(racerB);
    });
    it("returns null when both racers have the same speed", () => {
        const racerA: Racer = {
            team: "Ford Taurus",
            speed: 80,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const racerB: Racer = {
            team: "Ford Fusion",
            speed: 80,
            accelerate: () => {},
            isFuelEmpty: () => false,
        };
        const fastest = getFasterRacer(racerA, racerB);
        expect(fastest).toBe(null);
    });
    it("handles a diff. mix using 'GasCar' and 'SolarCar' as the racers", () => {
        const gasCar: Racer = {
            team: "Ford Taurus",
            speed: 100,
            accelerate: () => {},
            isFuelEmpty: () => false,
          };
          const solarCar: Racer = {
            team: "Stella",
            speed: 75,
            accelerate: () => {},
            isFuelEmpty: () => true,
          };
          const fastest = getFasterRacer(gasCar, solarCar);
          expect(fastest).toBe(gasCar);
    });
});