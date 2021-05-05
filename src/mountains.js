"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNameOfTallestMountain = void 0;
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(array) {
    var tallest = mountains[0];
    mountains.forEach(function (mountain) {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    console.log(tallest.name);
    return tallest.name;
}
exports.findNameOfTallestMountain = findNameOfTallestMountain;
