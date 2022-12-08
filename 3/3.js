"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ruckSacks = (0, fs_1.readFileSync)("input.txt", "utf-8").split(/\r?\n/);
const ruckSacksDivided = ruckSacks.map(ruckSack => {
    const numberOfItems = ruckSack.length;
    return [ruckSack.slice(0, numberOfItems / 2), ruckSack.slice(numberOfItems / 2)];
});
const getCommonItem = (ruckSackCompartment1, ruckSackCompartment2) => {
    const ruckSackCompartment1Array = ruckSackCompartment1.split("");
    const ruckSackCompartment2Array = ruckSackCompartment2.split("");
    const commonItem = ruckSackCompartment1Array.filter((letter) => ruckSackCompartment2Array.includes(letter));
    return commonItem[0];
};
const commonItems = ruckSacksDivided.map(ruckSack => getCommonItem(ruckSack[0], ruckSack[1]));
const checkIfLetterisUpperCase = (letter) => {
    return letter === letter.toUpperCase();
};
const getItemPriority = (item) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const positionPriority = alphabet.indexOf(item.toLowerCase()) + 1;
    return checkIfLetterisUpperCase(item) ? positionPriority + alphabet.length : positionPriority;
};
const ruckSackPriorities = commonItems.map(item => getItemPriority(item));
const totalPriorities = ruckSackPriorities.reduce((a, b) => a + b, 0);
console.log(totalPriorities);
