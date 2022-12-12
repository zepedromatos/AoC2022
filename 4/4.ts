import { readFileSync } from "fs";

const assignments = readFileSync("input.txt", "utf-8").split(/\r?\n/).map(assignment => assignment.split(","));

const checkIfAssignmentsAreFullyContained = ([...assignments]: string[]): boolean => {
    const [firstAssignment, secondAssignment] = assignments;
    return getAssignmentFullContainment([firstAssignment, secondAssignment]) || getAssignmentFullContainment([secondAssignment, firstAssignment]);
}

const checkIfAssignmentsArePartiallyContained = ([...assignments]: string[]): boolean => {
    const [firstAssignment, secondAssignment] = assignments;
    return getAssignmentPartialContainment([firstAssignment, secondAssignment]) || getAssignmentPartialContainment([secondAssignment, firstAssignment]);
};

const getStartingRangeId = (assignment: string): number => {
    const startingId = Number(assignment.split("-")[0]);
    return startingId;
};

const getLastRangeId = (assignment: string): number => {
    const lastId = Number(assignment.split("-")[1]);
    return lastId;
};

const getAssignmentFullContainment = ([...assignments]: string[]): boolean => {
    const [firstAssignment, secondAssignment] = assignments;
    return getStartingRangeId(firstAssignment) <= getStartingRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getLastRangeId(secondAssignment);
};

const getAssignmentPartialContainment = ([...assignments]: string[]): boolean => {
    const [firstAssignment, secondAssignment] = assignments;
    return getStartingRangeId(firstAssignment) <= getStartingRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getStartingRangeId(secondAssignment) || getStartingRangeId(firstAssignment) <= getLastRangeId(secondAssignment) && getLastRangeId(firstAssignment) >= getLastRangeId(secondAssignment);
};

const assignmentsFullyContained = assignments.filter(assignment => checkIfAssignmentsAreFullyContained(assignment));

const numberOfAssignmentsFullyContained = assignmentsFullyContained.length;

const assignmentsContained = assignments.filter(assignment => checkIfAssignmentsArePartiallyContained(assignment));

const numberOfAssignmentsContained = assignmentsContained.length;

console.log(numberOfAssignmentsContained);