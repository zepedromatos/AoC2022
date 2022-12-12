"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const assignments = (0, fs_1.readFileSync)("input.txt", "utf-8").split(/\r?\n/).map(assignment => assignment.split(","));
const checkIfAssignmentsAreContained = ([...assignments]) => {
    const [firstAssignment, secondAssignment] = assignments;
    return getAssignmentContainment([firstAssignment, secondAssignment]) || getAssignmentContainment([secondAssignment, firstAssignment]);
};
const getStartingRangeId = (assignment) => {
    const startingId = Number(assignment.split("-")[0]);
    return startingId;
};
const getLastRangeId = (assignment) => {
    const lastId = Number(assignment.split("-")[1]);
    return lastId;
};
const getAssignmentContainment = ([...assignments]) => {
    const [firstAssignment, secondAssignment] = assignments;
    return getStartingRangeId(firstAssignment) <= getStartingRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getLastRangeId(secondAssignment);
};
const assignmentsFullyContained = assignments.filter(assignment => checkIfAssignmentsAreContained(assignment));
const numberOfAssignmentsFullyContained = assignmentsFullyContained.length;
console.log(numberOfAssignmentsFullyContained);
