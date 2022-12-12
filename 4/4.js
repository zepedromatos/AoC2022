"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const assignments = (0, fs_1.readFileSync)("input.txt", "utf-8").split(/\r?\n/).map(assignment => assignment.split(","));
const checkIfAssignmentsAreFullyContained = ([...assignments]) => {
    const [firstAssignment, secondAssignment] = assignments;
    return getAssignmentFullContainment([firstAssignment, secondAssignment]) || getAssignmentFullContainment([secondAssignment, firstAssignment]);
};
const checkIfAssignmentsArePartiallyContained = ([...assignments]) => {
    const [firstAssignment, secondAssignment] = assignments;
    return getAssignmentPartialContainment([firstAssignment, secondAssignment]) || getAssignmentPartialContainment([secondAssignment, firstAssignment]);
};
const getStartingRangeId = (assignment) => {
    const startingId = Number(assignment.split("-")[0]);
    return startingId;
};
const getLastRangeId = (assignment) => {
    const lastId = Number(assignment.split("-")[1]);
    return lastId;
};
const getAssignmentFullContainment = ([...assignments]) => {
    const [firstAssignment, secondAssignment] = assignments;
    return getStartingRangeId(firstAssignment) <= getStartingRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getLastRangeId(secondAssignment);
};
const getAssignmentPartialContainment = ([...assignments]) => {
    const [firstAssignment, secondAssignment] = assignments;
    return getStartingRangeId(firstAssignment) <= getStartingRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getStartingRangeId(secondAssignment) || getStartingRangeId(firstAssignment) <= getLastRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getLastRangeId(secondAssignment);
};
const assignmentsFullyContained = assignments.filter(assignment => checkIfAssignmentsAreFullyContained(assignment));
const numberOfAssignmentsFullyContained = assignmentsFullyContained.length;
const assignmentsContained = assignments.filter(assignment => checkIfAssignmentsArePartiallyContained(assignment));
const numberOfAssignmentsContained = assignmentsContained.length;
console.log(numberOfAssignmentsContained);
