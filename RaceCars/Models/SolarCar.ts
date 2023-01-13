import { IRacer } from "../Interfaces/racecar"

class SolarCar implements IRacer {
    team: string
    speed: number;

    constructor(team:string) {
        this.team = team
        this.speed = 0;
    }

    accelerate(): void {
        this.speed += 1
    }

    isFuelEmpty(): boolean {
        return false
    }
}

const sCar = new SolarCar('Mercedes')
sCar.accelerate()
sCar.accelerate()
console.log(sCar)

export {SolarCar}