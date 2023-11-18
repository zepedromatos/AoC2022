"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_js_1 = require("./input.js");
const instructions = input_js_1.instructionsInput.split("\n");
const crates = input_js_1.cratesInput.split("\n");
console.log(crates[0]);
const numberOfStacks = Math.max(...input_js_1.cratesColumnsInput.split("").map(el => Number(el)));
const structuredInstructions = instructions.map(el => {
    var _a, _b;
    const numbers = (_b = (_a = el.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(Number)) !== null && _b !== void 0 ? _b : [];
    return {
        amount: numbers[0],
        from: numbers[1] - 1,
        to: numbers[2] - 1
    };
});
const organizeCrates = (crates, stackAmount) => {
    const suppliesPerCrate = crates.map(el => {
        let splitString = [];
        for (let i = 0; i < el.length; i += 4) {
            if (el[i] === "[") {
                splitString.push(el.substring(i, i + 3));
            }
            else {
                splitString.push("");
            }
        }
        return splitString;
    });
    const cratesColumns = Array.from({ length: stackAmount }, () => []);
    for (let line of suppliesPerCrate) {
        for (let [index, supply] of line.entries()) {
            if (!!supply) {
                let match = supply.match(/\[(.*?)\]/);
                if (match) {
                    cratesColumns[index].push(match[1]);
                }
            }
        }
    }
    return cratesColumns;
};
const cratesPerColumn = organizeCrates(crates, numberOfStacks);
const performInstructions = (columnsOfCrates, instructions) => {
    const rearrangedColumns = structuredClone(columnsOfCrates);
    for (const instruction of instructions) {
        const removedItems = rearrangedColumns[instruction.from].splice(0, instruction.amount);
        // Part 1
        /* rearrangedColumns[instruction.to] = [...removedItems.reverse(), ...rearrangedColumns[instruction.to]]; */
        // Part 2
        rearrangedColumns[instruction.to] = [...removedItems, ...rearrangedColumns[instruction.to]];
    }
    return rearrangedColumns;
};
const columnsAfterInstructions = performInstructions(cratesPerColumn, structuredInstructions);
const topCrates = columnsAfterInstructions.map(el => el[0]).join("");
console.log(topCrates);
