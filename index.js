// Code your solution in this file!
const returnFirstTwoDrivers = function (a) {
  const drivers = ["", ""];
  for (let i = 0; i < 2; i++) {
    drivers[i] += a[i];
  }
  return drivers;
};

const returnLastTwoDrivers = function (a) {
  const drivers = a.splice(-2);
  return drivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
  return function fareMultiplier(fare) {
    return fare * x;
  };
}

function fareDoubler(f) {
  const createMultiplier = createFareMultiplier(f)();
  return f * 2;
}

function fareTripler(f) {
  return f * 3;
}

function selectDifferentDrivers(arr, fun) {
  const arrCopy = [...arr];
  const result = fun(arrCopy);
  return result;
}
