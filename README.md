Coding Challenge: "Location tracker"
====================================

Commanders Intend:
-----------------
Build a web app, which stores user locations.


Acceptance Criteria:
-------------------
* The web app has an HTML front-end, which is the user interface
* The user's location is retrieved from the HTML5 Geolocation API
* The user's name is retrieved via a HTML form
* In addition to each location and username a timestamp is also sent
* The data will be persisted/stored in the back-end
* The backend service is written in Java

The Web Client/Server Architecture:
----------------------------------
* Maven project
* Client is implemented via jQuery and JavaScript and accessable: http://localhost:8080/frontend
* JAX-RS (Java API for RESTful services) is implemented using Jersey, Jackson, and the Grizzly Server
* Data is serialized into JSON (JavaScript Object Notation)
* For storing data MongoDB (a NoSQL database) is choosen
* Access API: http://localhost:8080/users

Run project:
-------------------
* Clone repository
* mvn clean compile
* mvn exec:java