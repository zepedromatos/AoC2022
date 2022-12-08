"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_1 = require("./2");
var Result;
(function (Result) {
    Result["loss"] = "X";
    Result["draw"] = "Y";
    Result["win"] = "Z";
})(Result || (Result = {}));
var ResultScore;
(function (ResultScore) {
    ResultScore[ResultScore["X"] = 0] = "X";
    ResultScore[ResultScore["Y"] = 3] = "Y";
    ResultScore[ResultScore["Z"] = 6] = "Z";
})(ResultScore || (ResultScore = {}));
const getMyShapeFromResult = (result, opponentShape) => {
    switch (true) {
        case result === Result.draw: return opponentShape;
        case result === Result.loss && opponentShape === _2_1.Play.Rock: return _2_1.Play.Scissors;
        case result === Result.loss && opponentShape === _2_1.Play.Paper: return _2_1.Play.Rock;
        case result === Result.loss && opponentShape === _2_1.Play.Scissors: return _2_1.Play.Paper;
        case result === Result.win && opponentShape === _2_1.Play.Rock: return _2_1.Play.Paper;
        case result === Result.win && opponentShape === _2_1.Play.Paper: return _2_1.Play.Scissors;
        case result === Result.win && opponentShape === _2_1.Play.Scissors: return _2_1.Play.Rock;
        default: return _2_1.Play.default;
    }
};
const getScoreOfMyShape = (shape) => {
    switch (shape) {
        case _2_1.Play.Rock: return 1;
        case _2_1.Play.Paper: return 2;
        case _2_1.Play.Scissors: return 3;
        default: return 0;
    }
};
const getOutcomeScore = (result) => {
    return ResultScore[result];
};
const allMatchesScores = _2_1.matches.map(match => {
    const myShape = getMyShapeFromResult(match[1], match[0]);
    const myShapeScore = getScoreOfMyShape(myShape);
    const outcomeScore = getOutcomeScore(match[1]);
    return myShapeScore + outcomeScore;
});
const totalScore = allMatchesScores.reduce((a, b) => a + b, 0);
console.log(totalScore);
