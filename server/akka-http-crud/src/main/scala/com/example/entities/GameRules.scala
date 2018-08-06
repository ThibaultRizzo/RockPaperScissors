package com.example.entities

case class Rule(name: Move, winsOver: List[Move], losesOver: List[Move])

object Result extends Enumeration {
  type Result = Value

  val DRAW = Val("DRAW")
  val WIN = Val("WIN")
  val LOSE = Val("LOSE")
}

object GameRule {

  sealed abstract class Rule(val id: Int,
                             val name: Move,
                             val winsOver: List[Move],
                             val losesOver: List[Move])
      extends Ordered[Planet] {

    def isWinningAgainst(otherMove: Move): Result = {
      if (this.winsOver.contains(otherMove.name)) {
        Result.WIN
      } else if (this.losesOver.contains(otherMove.name)) {
        Result.LOSE
      } else {
        Result.DRAW
      }
    }
  }

  case object ROCK
      extends Rule(0, Move.ROCK, List(Move.SCISSORS), List(Move.PAPER))
  case object PAPER
      extends Rule(1, Move.ROCK, List(Move.ROCK), List(Move.SCISSORS))
  case object SCISSORS
      extends Rule(2, Move.ROCK, List(Move.PAPER), List(Move.ROCK))

  val rules: Set[Rule] = sealedInstancesOf[Rule]
}
