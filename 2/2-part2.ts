import { matches, Play } from "./2";

enum Result {
    loss = 'X',
    draw = 'Y',
    win = 'Z'
}

enum ResultScore {
    'X' = 0,
    'Y' = 3,
    'Z' = 6
}

const getMyShapeFromResult = (result: Result, opponentShape: Play): Play => {
    switch (true) {
        case result === Result.draw: return opponentShape;
        case result === Result.loss && opponentShape === Play.Rock : return Play.Scissors;
        case result === Result.loss && opponentShape === Play.Paper : return Play.Rock;
        case result === Result.loss && opponentShape === Play.Scissors : return Play.Paper;
        case result === Result.win && opponentShape === Play.Rock : return Play.Paper;
        case result === Result.win && opponentShape === Play.Paper : return Play.Scissors;
        case result === Result.win && opponentShape === Play.Scissors : return Play.Rock;
        default: return Play.default;
    }
};

const getScoreOfMyShape = (shape: Play): number => {
    switch (shape) {
        case Play.Rock: return 1;
        case Play.Paper: return 2;
        case Play.Scissors: return 3;
        default: return 0;
    }
};

const getOutcomeScore = (result: Result): number => {
    return ResultScore[result];
}

const allMatchesScores = matches.map(match => {
    const myShape = getMyShapeFromResult(match[1] as Result, match[0] as Play);
    const myShapeScore = getScoreOfMyShape(myShape);
    const outcomeScore = getOutcomeScore(match[1] as Result);
    return myShapeScore + outcomeScore;
});

const totalScore = allMatchesScores.reduce((a, b) => a + b, 0);

console.log(totalScore);