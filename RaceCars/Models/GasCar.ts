import { IRacer } from "../Interfaces/racecar"

class GasCar implements IRacer {
    team: string;
    speed: number;
    fuel: number;

    constructor(team:string, fuel=10) {
        this.team = team;
        this.speed = 0;
        this.fuel = fuel;
    }

    accelerate(): void {
        this.speed += 2
        this.fuel -= 1
    }

    isFuelEmpty(): boolean {
        return this.fuel <= 0;
    }
}

const gCar = new GasCar('Ferarri')

export {GasCar}


