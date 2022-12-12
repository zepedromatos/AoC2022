import { readFileSync } from "fs";

const assignments = readFileSync("input.txt", "utf-8").split(/\r?\n/).map(assignment => assignment.split(","));

const checkIfAssignmentsAreContained = ([...assignments]: string[]): boolean => {
    const [firstAssignment, secondAssignment] = assignments;
    return getAssignmentContainment([firstAssignment, secondAssignment]) || getAssignmentContainment([secondAssignment, firstAssignment]);
}

const getStartingRangeId = (assignment: string): number => {
    const startingId = Number(assignment.split("-")[0]);
    return startingId;
};

const getLastRangeId = (assignment: string): number => {
    const lastId = Number(assignment.split("-")[1]);
    return lastId;
};

const getAssignmentContainment = ([...assignments]: string[]): boolean => {
    const [firstAssignment, secondAssignment] = assignments;
    return getStartingRangeId(firstAssignment) <= getStartingRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getLastRangeId(secondAssignment);
};

const assignmentsFullyContained = assignments.filter(assignment => checkIfAssignmentsAreContained(assignment));

const numberOfAssignmentsFullyContained = assignmentsFullyContained.length;

console.log(numberOfAssignmentsFullyContained);