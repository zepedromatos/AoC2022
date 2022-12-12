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
// part 2
const getGroupsRacksacks = (ruckSacks) => {
    let groupedRuckSacks = [];
    for (let index = 0; index < ruckSacks.length; index += 3) {
        groupedRuckSacks = [...groupedRuckSacks, [ruckSacks[index], ruckSacks[index + 1], ruckSacks[index + 2]]];
    }
    return groupedRuckSacks;
};
const groupedRuckSacks = getGroupsRacksacks(ruckSacks);
const getCommonItemFromGroupRucksack = (ruckSackCompartment1, ruckSackCompartment2, ruckSackCompartment3) => {
    const ruckSackCompartment1Array = ruckSackCompartment1.split("");
    const ruckSackCompartment2Array = ruckSackCompartment2.split("");
    const ruckSackCompartment3Array = ruckSackCompartment3.split("");
    const commonItem = ruckSackCompartment1Array.filter((letter) => ruckSackCompartment2Array.includes(letter) && ruckSackCompartment3Array.includes(letter));
    return commonItem[0];
};
const commonItemsFromGroupedRuckSacks = groupedRuckSacks.map(ruckSack => getCommonItemFromGroupRucksack(ruckSack[0], ruckSack[1], ruckSack[2]));
const ruckSackPrioritiesFromGroupedRuckSacks = commonItemsFromGroupedRuckSacks.map(item => getItemPriority(item));
const totalPrioritiesFromGroupedRuckSacks = ruckSackPrioritiesFromGroupedRuckSacks.reduce((a, b) => a + b, 0);
console.log(totalPrioritiesFromGroupedRuckSacks);
