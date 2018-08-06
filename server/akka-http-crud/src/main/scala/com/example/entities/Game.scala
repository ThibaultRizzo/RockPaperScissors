package com.example.entities

case class Game(id: Int,
                gameType: GameType,
                player: User,
                totalRound: Int,
                currentRound: Int,
                p1WonRounds: Int,
                winner: Option[String])

object GameType extends Enumeration {
  type GameType = Value

  val playerVsAI, AIVsAI = Value
}
