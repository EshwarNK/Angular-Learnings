import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    //Overriding the getDailyWorkOut()
    getDailyWorkout(): string {
        return "Practice your spin bowling technique";
    }
}