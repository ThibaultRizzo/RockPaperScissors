package com.example.services

import com.example.entities.{User, UserUpdate}

import scala.concurrent.{ExecutionContext, Future}

class UserService(implicit val executionContext: ExecutionContext) {

  var users = Vector.empty[User]

  def createUser(user: User): Future[Option[String]] = Future {
    users.find(_.name == user.name) match {
      case Some(q) => None // Conflict! id is already taken
      case None =>
        users = users :+ user
        Some(user.name)
    }
  }

  def getUser(name: String): Future[Option[User]] = Future {
    users.find(_.name == name)
  }


  def getUsers(): List[User] = {
    users.toList
  }

  def updateUser(name: String, update: UserUpdate): Future[Option[User]] = {

    def updateEntity(user: User): User = {
      val upadtedRatio = update.winRatio.getOrElse(user.winRatio)
      val updatedWins = update.numberWins.getOrElse(user.numberWins)
      User(name, updatedWins, upadtedRatio)
    }

    getUser(name).flatMap { maybeUser =>
      maybeUser match {
        case None => Future { None } // No user found, nothing to update
        case Some(user) =>
          val updatedUser = updateEntity(user)
          deleteUser(name).flatMap { _ =>
            createUser(updatedUser).map(_ => Some(updatedUser))
          }
      }
    }
  }

  def deleteUser(name: String): Future[Unit] = Future {
    users = users.filterNot(_.name == name)
  }


}

