"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains_1 = require("../src/mountains");
describe("findNameOfTallestMountain", function () {
    test("middle mountain", function () {
        var name = mountains_1.findNameOfTallestMountain([
            { name: "Kilimanjaro", height: 19341 },
            { name: "Everest", height: 29029 },
            { name: "Denali", height: 20310 }
        ]);
        expect(name).toBe("Everest");
    });
    test("first mountain", function () {
        var name = mountains_1.findNameOfTallestMountain([
            { name: "Everest", height: 29029 },
            { name: "Kilimanjaro", height: 19341 },
            { name: "Denali", height: 20310 }
        ]);
        expect(name).toBe("Everest");
    });
    test("last mountain", function () {
        var name = mountains_1.findNameOfTallestMountain([
            { name: "Kilimanjaro", height: 19341 },
            { name: "Denali", height: 20310 },
            { name: "Everest", height: 29029 }
        ]);
        expect(name).toBe("Everest");
    });
});
