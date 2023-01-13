//business logic

import { IRacer } from "../Interfaces/racecar";

function findRacersWithEmptyFuel (racers: IRacer[]) : IRacer[]  {
    return racers.filter((e) => e.isFuelEmpty())
    // let emptyRacers : IRacer[] = []

    // for (let i = 0; i < racers.length; i++) {
    //     if (racers[i].isFuelEmpty() === true ) {
    //         emptyRacers.push(racers[i]);
    //     }
    // }

    //return emptyRacers
    
}

function findAverageSpeed (racers: IRacer[]) : number {
    const speed = racers.map(racer => racer.speed);
    return speed.reduce((a, b) => a + b) / speed.length;
    // let totalSpeed = 0;

    // for (let racer of racers) {
    //     totalSpeed += racer.speed
    // }

    // return totalSpeed / racers.length
    
}

function getFasterRacer (racerA : IRacer, racerB: IRacer) {
    if(racerA.speed > racerB.speed) {
        return racerA;
    }
    else if (racerA.speed < racerB.speed) {
        return racerB;
    }
    else {
        return null;
    }
}

export {findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer}