import  Racer from "../src/Racer"
import  GasCar from "../src/GasCar"
import SolarCar from "../src/SolarCar";

export const findRacersWithEmptyFuel = (
    racers: Racer[],
): Racer[] => {
    const racersWithEmptyFuel = racers.filter((racer) => racer.isFuelEmpty());
    return racersWithEmptyFuel;
};

export const findAverageSpeed = (
    racers: Racer[],
): number => {
    if (racers.length === 0) {
        return 0;
    };
    const sumSpeedOfAllRacers = racers.reduce((sum, racer) => sum + racer.speed, 0);
    const averageSpeed = sumSpeedOfAllRacers / racers.length;
    return averageSpeed;
};

export const getFasterRacer = (
    racerA: Racer,
    racerB: Racer 
): Racer | null => {
    if(racerA.speed > racerB.speed) {
        return racerA;
    } else if (racerA.speed < racerB.speed) {
        return racerB;
    } else {
        return null;
    };
};