import React from 'react';
import ReactDOM from 'react-dom';
import {
  resolveTurn,
  winner,
  GameMoves,
  Result,
  generateRandomMove,
  summarizeGame,
  workWinRate
} from './Rules.js';

const games = [
  [
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'SCISSORS', result: 'DRAW' },
    { result: 'LOSE', scoreP1: 0, scoreP2: 2 }
  ],
  [
    { moveP1: 'PAPER', moveP2: 'ROCK', result: 'WIN' },
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'PAPER', moveP2: 'PAPER', result: 'DRAW' },
    { moveP1: 'ROCK', moveP2: 'SCISSORS', result: 'WIN' },
    { result: 'DRAW', scoreP1: 2, scoreP2: 2 }
  ],
  [
    { moveP1: 'ROCK', moveP2: 'SCISSORS', result: 'WIN' },
    { moveP1: 'PAPER', moveP2: 'SCISSORS', result: 'LOSE' },
    { moveP1: 'PAPER', moveP2: 'SCISSORS', result: 'LOSE' },
    { moveP1: 'PAPER', moveP2: 'PAPER', result: 'DRAW' },
    { result: 'LOSE', scoreP1: 1, scoreP2: 2 }
  ],
  [
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'PAPER', result: 'WIN' },
    { moveP1: 'SCISSORS', moveP2: 'PAPER', result: 'WIN' },
    { result: 'WIN', scoreP1: 2, scoreP2: 1 }
  ]
];

describe('winnner function', () => {
  describe('when playing scissors against paper', () => {
    it('returns a WIN', () => {
      expect(winner(GameMoves.SCISSORS, GameMoves.PAPER)).toBe(Result.WIN);
    });
  });
  describe('when playing rock against paper', () => {
    it('returns a LOSE', () => {
      expect(winner(GameMoves.ROCK, GameMoves.PAPER)).toBe(Result.LOSE);
    });
  });
  describe('when playing rock against rock', () => {
    it('returns a DRAW', () => {
      expect(winner(GameMoves.ROCK, GameMoves.ROCK)).toBe(Result.DRAW);
    });
  });
});

describe('generateRandomMove', () => {
  it('generates an output of type GameMoves', () => {
    let movesArray = new Array(1000);
    movesArray.map(val => generateRandomMove());
    expect(
      movesArray.every(val => {
        Object.values(GameMoves).includes(val);
      })
    ).toBe(true);
  });
});

describe('resolveTurn', () => {
  describe('when passing a move to resolveTurn', () => {
    it('returns an object with result of type Result and two fields movesP1 and movesP2 of type GameMoves', () => {
      let resolved = resolveTurn(GameMoves.PAPER);
      expect(resolved.moveP1).toBe(GameMoves.PAPER);
      expect(Object.values(GameMoves).includes(resolved.moveP2)).toBe(true);
      expect(Object.values(Result).includes(resolved.result)).toBe(true);
    });
  });
});

describe('summarizeGame', () => {
  describe('when summarizing a game', () => {
    it('returns a summary of all turns', () => {
      let game = [
        { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
        { moveP1: 'ROCK', moveP2: 'PAPER', result: 'LOSE' },
        { moveP1: 'PAPER', moveP2: 'ROCK', result: 'WIN' },
        { moveP1: 'ROCK', moveP2: 'PAPER', result: 'LOSE' },
        { moveP1: 'PAPER', moveP2: 'PAPER', result: 'DRAW' }
      ];
      let details = summarizeGame(game);
      expect(details.result).toBe(Result.LOSE);
      expect(details.scoreP1).toBe(1);
      expect(details.scoreP2).toBe(3);
    });
  });
});

describe('workWinRate', () => {
  describe('when calculing a win rate', () => {
    it('returns a valid and well formatted win rate', () => {
      const winRate = workWinRate(games);
      expect(winRate).toBe('25%');
    });
  });
});
