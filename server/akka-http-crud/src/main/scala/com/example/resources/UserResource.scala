package com.example.resources

import akka.http.scaladsl.server.Route

import com.example.entities.{User}
import com.example.routing.MyResource
import com.example.services.UserService

trait UserResource extends MyResource {

  val userService: UserService

  def userRoutes: Route = 
  concat(pathPrefix("user") {
    pathEnd {
      post {
        entity(as[User]) { user =>
          completeWithLocationHeader(
            resourceId = userService.createUser(user),
            ifDefinedStatus = 201, ifEmptyStatus = 409)
          }
        }
    } ~
    path(Segment) { name =>
      get {
        complete(userService.getUser(name.toLowerCase()))
      }
    }
  },
  pathPrefix("users") {
    pathEnd {
      get {
        complete(userService.getUsers())
      }
    }
  });
}

