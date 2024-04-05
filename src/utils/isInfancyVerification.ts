import { ONE_YEAR_IN_MILISECONDS } from "./oneYearInMiliseconds";

export const isInfancyVerification = (age: string)=>{
    const ageInMiliSeconds = new Date(age).getTime();
    const dateNow = Date.now();
    let idade = Math.floor((dateNow - ageInMiliSeconds) / ONE_YEAR_IN_MILISECONDS)
    return idade < 18;
}