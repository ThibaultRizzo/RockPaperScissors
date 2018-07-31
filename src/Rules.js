/**
 * Enum object encapsulating all game rules
 * There are redundant information displayed for clarity and enforcing coherence
 */
const GameRules = {
    ROCK: "ROCK",
    PAPER: "PAPER",
    SCISSORS: "SCISSORS",
    relations: {
        ROCK: {
            winOver: ["SCISSORS"],
            loseOver: ["PAPER"]
        },
        PAPER: {
            winOver: ["ROCK"],
            loseOver: ["SCISSORS"]
        },
        SCISSORS: {
            winOver: ["PAPER"],
            loseOver: ["ROCK"]
        },
    },
};
const GameMoves = ["ROCK", "PAPER", "SCISSORS"];

const Result = {
    DRAW: "DRAW",
    WIN: "WIN",
    LOSE: "LOSE"
}

// Enforces enumerable principles by forbidding to modify the objet
Object.freeze(GameRules);
Object.freeze(GameMoves);
Object.freeze(Result);

function winner(p1, p2) {
    let result;
    // If p1 wins over p2
    if (p1 === p2) {
        result = Result.DRAW;
    } else if (GameRules.relations[p1].winOver.includes(p2)) {
        result = Result.WIN;
    } else {
        result = Result.LOSE;
    }
    return result;
}

export {
    GameRules,
    GameMoves,
    Result,
    winner
};