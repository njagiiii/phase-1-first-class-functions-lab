// Code your solution in this file!
const returnFirstTwoDrivers=function(arr){
    arr =['Antonia','Nuru','Amari','Mo'];
    return arr.slice(0,arr.length-2);
}
const returnLastTwoDrivers=function(arr){
    arr =['Antonia','Nuru','Amari','Mo'];
    return arr.slice(2);
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
    return function FareMultiplier(){return 5*x};
}
function fareDoubler(x){
    return 2*x;
}
function fareTripler(x){
    return 3*x;
}
function selectDifferentDrivers(arrayofDrivers,returnFirstTwoDrivers){
    arrayofDrivers['Antonia','Nuru','Amari','Mo']
    returnFirstTwoDrivers();
}