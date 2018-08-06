package com.example

import scala.concurrent.ExecutionContext

import akka.http.scaladsl.server.Route

import com.example.resources.{UserResource}
import com.example.services.{UserService, GameService}

trait RestInterface extends Resources {

  implicit def executionContext: ExecutionContext

  lazy val userService = new UserService
  lazy val gameService = new GameService

  val routes: Route = userRoutes ~ gameRoutes

}

trait Resources extends UserResource
