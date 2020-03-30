// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const myFunc = function (drivers) {
        return drivers.slice(0,2);
    };

    return myFunc(drivers);
}

function returnLastTwoDrivers(drivers) {
    const myFunc = function (drivers) {
        return drivers.slice(-2);
    };

    return myFunc(drivers);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) { return fare * integer};
    
}

function fareDoubler(fare) { return createFareMultiplier(2)(fare)};

function fareTripler(fare) { return createFareMultiplier(3)(fare)};

function selectDifferentDrivers(drivers, func) {return func(drivers)}