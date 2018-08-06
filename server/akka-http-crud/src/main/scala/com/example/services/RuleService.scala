package com.example.services

import com.example.entities.{Game, GameType, User, Move, NextMove, GameRules}

import scala.concurrent.{ExecutionContext, Future}
import scala.util.Random

class RuleService(implicit val executionContext: ExecutionContext) {

val gameService: GameService

def generateRandomMove(): Move = {
    val rd = nextInt(3)
    GameRules.find(r => r.id == rd)
}

def resolveMove(id: Int, move: NextMove): Future[Option[NextMove]] = {
    var moveP2: Move : generateRandomMove()

    getGame(id).flatMap { maybeGame =>
      maybeGame match {
        case None => Future { None } // No game found, cannot resolve the move
        case Some(game) =>
          GameRules.find(rule => rule.name == )
          deleteGame(id).flatMap { _ =>
            createGame(updatedGame).map(_ => Some(updatedGame))
          }
      }
    }
    var game: Game = gameService.getGame
}



}

