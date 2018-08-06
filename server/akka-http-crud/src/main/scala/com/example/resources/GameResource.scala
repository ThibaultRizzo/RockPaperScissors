package com.example.resources

import akka.http.scaladsl.server.Route

import com.example.entities.{Game, NextMove}
import com.example.routing.MyResource
import com.example.services.GameService

trait GameResource extends MyResource {

  val gameService: GameService

  def gameRoutes: Route =
    pathPrefix("game") {
      pathEnd {
        post {
          entity(as[NextMove]) { move =>
            completeWithLocationHeader(
              resourceId = gameService.createUser(user),
              ifDefinedStatus = 201,
              ifEmptyStatus = 409)
          }
        }
      } ~
        path(Segment) { name =>
          get {
            complete(userService.getUser(name.toLowerCase()))
          }
        }
    };
}
