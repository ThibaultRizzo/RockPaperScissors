package com.example.entities

case class NextMove(id: Int,
                    nextMove: Move,
                    p2Move: Option[Move],
                    result: Option[Result])
