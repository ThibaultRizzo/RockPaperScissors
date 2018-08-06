/**
 * Enum object encapsulating all game rules
 * There are redundant information displayed for clarity and enforcing coherence
 */
const GameRules = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
  relations: {
    ROCK: {
      winOver: ['SCISSORS'],
      loseOver: ['PAPER']
    },
    PAPER: {
      winOver: ['ROCK'],
      loseOver: ['SCISSORS']
    },
    SCISSORS: {
      winOver: ['PAPER'],
      loseOver: ['ROCK']
    }
  }
};
const GameMoves = ['ROCK', 'PAPER', 'SCISSORS'];

const Result = {
  DRAW: 'DRAW',
  WIN: 'WIN',
  LOSE: 'LOSE'
};

/**
 * Applies rules of game as specified in the GameRule object
 * Returns a result of type Result else null if one of the moves is not defined
 * @param {*} p1
 * @param {*} p2
 */
function winner(p1, p2) {
  let result;
  // If p1 wins over p2
  if (!GameMoves.includes(p1) || !GameMoves.includes(p2)) {
    return null;
  }
  if (p1 === p2) {
    result = Result.DRAW;
  } else if (GameRules.relations[p1].winOver.includes(p2)) {
    result = Result.WIN;
  } else {
    result = Result.LOSE;
  }
  return result;
}

function generateRandomMove() {
  const randomPosition = Math.floor(Math.random() * GameMoves.length);
  const result = GameMoves[randomPosition];
  console.log(`Computer just chose ${result}`);
  return result;
}

/**
 * Resolve the turn given player move
 * Returns moves of both players and result if move of P1 is defined
 * Else returns nulled properties
 * @param {*} moveP1
 */
export function resolveTurn(moveP1) {
  let turn = {
    moveP1: moveP1,
    moveP2: null,
    result: null
  };
  if (turn.moveP1) {
    turn.moveP2 = generateRandomMove();
    turn.result = winner(turn.moveP1, turn.moveP2);
  }
  return turn;
}

// Enforces enumerable principles by forbidding to modify the objet
Object.freeze(GameRules);
Object.freeze(GameMoves);
Object.freeze(Result);

export { GameRules, GameMoves, Result };
