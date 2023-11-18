"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_js_1 = require("./input.js");
const inputCharacters = input_js_1.input.split("");
// Part 1
/* const markersLength: number = 4; */
// Part 2
const markersLength = 14;
for (let i = 0; i < inputCharacters.length - markersLength + 1; i++) {
    const subArray = inputCharacters.slice(i, i + markersLength);
    const uniqueSet = new Set(subArray);
    if (uniqueSet.size === subArray.length) {
        console.log("Found the marker: ", i + markersLength);
        break;
    }
}
