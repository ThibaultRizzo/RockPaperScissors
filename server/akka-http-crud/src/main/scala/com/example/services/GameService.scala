package com.example.services

import com.example.entities.{Game, GameType, User, Move}

import scala.concurrent.{ExecutionContext, Future}

class GameService(implicit val executionContext: ExecutionContext) {

  var games = Vector.empty[Move]
  val DEFAULT_TOTAL_ROUNDS: Int = 3

  def createGame(user: User,
                 gameType: GameType,
                 totalRounds: Int = DEFAULT_TOTAL_ROUNDS) = {
    val id = games.length()
    var game = Game(id, gameType, user, totalRounds, Some(0), Some(0), None)
    games = games :+ game
  }

  def getGame(id: Int): Future[Option[Game]] = Future {
    games.find(_.id == id)
  }

  def updateGame(id: Int, update: GameUpdate): Future[Option[Game]] = {

    def updateEntity(game: Game): Game = {
      val currentRound = update.currentRound.getOrElse(game.currentRound)
      val p1WonRounds = update.p1WonRounds.getOrElse(game.p1WonRounds)
      val winner = update.winner.getOrElse(game.winner)
      Game(currentRound, p1WonRounds, winner)
    }

    getGame(id).flatMap { maybeGame =>
      maybeGame match {
        case None => Future { None } // No game found, nothing to update
        case Some(game) =>
          val updatedGame = updateEntity(game)
          deleteGame(id).flatMap { _ =>
            createGame(updatedGame).map(_ => Some(updatedGame))
          }
      }
    }
  }

  def deleteGame(id: Int): Future[Unit] = Future {
    games = games.filterNot(_.id == id)
  }

}
