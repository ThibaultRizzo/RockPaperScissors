 package com.example.entities
 
object Move extends Enumeration {
  type Move = Value

  val ROCK = Val("Rock")
  val PAPER = Val("Paper")
  val SCISSORS = Val("Scissors")
}