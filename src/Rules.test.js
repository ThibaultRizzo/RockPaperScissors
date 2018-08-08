import React from 'react';
import ReactDOM from 'react-dom';
import { resolveTurn, winner, GameMoves, Result } from './Rules.js';

describe('winnner function', () => {
  describe('when playing scissors against paper', () => {
    it('returns a WIN', () => {
      expect(winner(GameMoves[2], GameMoves[1])).toBe(Result.WIN);
    });
  });
  describe('when playing rock against paper', () => {
    it('returns a LOSE', () => {
      expect(winner(GameMoves[0], GameMoves[1])).toBe(Result.LOSE);
    });
  });
  describe('when playing rock against rock', () => {
    it('returns a DRAW', () => {
      expect(winner(GameMoves[0], GameMoves[0])).toBe(Result.DRAW);
    });
  });
});

describe('resolveTurn', () => {});
