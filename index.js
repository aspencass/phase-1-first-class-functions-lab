// Code your solution in this file!

const returnFirstTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice(0, 2) 
};

const returnLastTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (value1) {
    return function (value2) {
        return value1 * value2
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (scuberDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(scuberDrivers)
};

/*




selectDifferentDrivers() — This function takes two arguments, an array of the names
 of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() 
 function. Based on these two arguments, selectDifferentDrivers() will return either the
  first two drivers or the last two drivers.


*/