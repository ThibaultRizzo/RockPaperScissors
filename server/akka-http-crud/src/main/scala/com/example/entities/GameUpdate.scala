package com.example.entities

case class GameUpdate(currentRound: Option[Int], p1WonRounds: Option[Int], winner: Option[User])