/**
 * Enum object of all possible moves possible.
 */
const GameMoves = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS'
};

/**
 * Enum object of all game types
 */
const GameType = {
  PlayerVsAI: 'Player vs AI',
  AIVsAI: 'AI vs AI'
};

/**
 * Enum object of possible outcomes in a game.
 */
const Result = {
  DRAW: 'DRAW',
  WIN: 'WIN',
  LOSE: 'LOSE'
};

/**
 * Enum object encapsulating all game rules
 * There are redundant information displayed for clarity and enforcing coherence
 */
const GameRules = {
  ROCK: {
    winOver: [GameMoves.SCISSORS],
    loseOver: [GameMoves.PAPER]
  },
  PAPER: {
    winOver: [GameMoves.ROCK],
    loseOver: [GameMoves.SCISSORS]
  },
  SCISSORS: {
    winOver: [GameMoves.PAPER],
    loseOver: [GameMoves.ROCK]
  }
};

// Enforces enumerable principles by forbidding to modify the objet
Object.freeze(GameRules);
Object.freeze(GameMoves);
Object.freeze(GameType);
Object.freeze(Result);

export { GameRules, GameMoves, Result, GameType };

/**
 * Applies rules of game as specified in the GameRule object
 * Returns a result of type Result else null if one of the moves is not defined
 * @param {*} p1: a value from GameMoves
 * @param {*} p2: a value from GameMoves
 */
export function winner(p1, p2) {
  let result;
  // Check that both objects are of GameMoves type
  if (
    !Object.values(GameMoves).includes(p1) &&
    !Object.values(GameMoves).includes(p2)
  ) {
    return null;
  }
  if (p1 === p2) {
    result = Result.DRAW;
  } else if (GameRules[p1].winOver.includes(p2)) {
    result = Result.WIN;
  } else {
    result = Result.LOSE;
  }
  return result;
}

export function generateRandomMove() {
  const randomPosition = Math.floor(
    Math.random() * Object.values(GameMoves).length
  );
  const result = Object.values(GameMoves)[randomPosition];
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

/**
 * Returns game object with a details properties summarizing the game.
 * ex:
 *      details: {
 *          result: -> Result enum object
 *          scoreP1: -> Number of turn won by P1
 *          scoreP2: -> Number of turn won by P2
 *      }
 * @param {*} game
 */
export function summarizeGame(game, gameType) {
  let gameResult = {
    result: null,
    scoreP1: 0,
    scoreP2: 0,
    gameType: gameType,
  };
  game.forEach(turn => {
    if (Result.WIN === turn.result) {
      gameResult.scoreP1++;
    } else if (Result.LOSE === turn.result) {
      gameResult.scoreP2++;
    }
  });
  if (gameResult.scoreP1 > gameResult.scoreP2) {
    gameResult.result = Result.WIN;
  } else if (gameResult.scoreP1 < gameResult.scoreP2) {
    gameResult.result = Result.DRAW;
  } else {
    gameResult.result = Result.LOSE;
  }
  return gameResult;
}

/**
 * Calculates win rate of player given all games recorded, else return O
 * @param {*} games
 */
export function workWinRate(games) {
  let wins = 0;

  games.forEach(game => {
    let details = game[game.length - 1];
    if (details.result === Result.WIN) {
      wins++;
    }
  });

  let winRate =
    Object.keys(games).length !== 0 ? wins / Object.keys(games).length : 0;
  return Math.floor(winRate * 100) + '%';
}
