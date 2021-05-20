// Code your solution in this file!
const returnFirstTwoDrivers = function(ray){
    return ray.slice(0,2);
}

const returnLastTwoDrivers = function(ray){
    return ray.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num){
    return function(value){
        return num * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fareQuintupler = createFareMultiplier(5);

const selectDifferentDrivers = function(ray, driversToReturn){
    return driversToReturn(ray);
}