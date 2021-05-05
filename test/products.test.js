"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../src/products");
describe("calcAverageProductPrice", function () {
    test("three products", function () {
        var value = products_1.calcAverageProductPrice([
            { name: "apples", price: 5 },
            { name: "oranges", price: 5 },
            { name: "mangos", price: 11 }
        ]);
        expect(value).toBe(7);
    });
    test("two products", function () {
        var value = products_1.calcAverageProductPrice([
            { name: "greens", price: 3 },
            { name: "cornbread", price: 4 }
        ]);
        expect(value).toBe(3.5);
    });
    test("one product", function () {
        var value = products_1.calcAverageProductPrice([
            { name: "desk", price: 120 }
        ]);
        expect(value).toBe(120);
    });
    test("zero products", function () {
        var value = products_1.calcAverageProductPrice([]);
        expect(value).toBe(0);
    });
});
