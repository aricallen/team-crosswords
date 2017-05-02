# #TeamCrosswords #

A simple app that allows multiple people to solve a NYT crossword puzzle together in real time.

Utilizes the crossword data provided by [xwordinfo](http://www.xwordinfo.com)

### API ###

```sh
# get the latest (yesterdays) puzzle data in JSON
GET http://www.xwordinfo.com/JSON/TrackData.aspx

# get specified date's puzzle data in JSON
# '%2F' == '/'
# leading zeros can be added but are not needed
GET https://www.xwordinfo.com/JSON/TrackData.aspx?date=4%2F9%2F2017&Variety=false
```

### Installation ###

* `npm install`
* `mongod --dbpath <path to data directory>`
* `npm start`

### Overview ###

**Server**
Node:
backend server/host

**Routing**
`Express`:
router and API for different pages and handling internal http calls

**DB**
`MongoDB`:
holds the persistant state of the user accounts and their progress
[installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

**Views**
`ExpressHandlebars`: (may refactor later to just ES6 or Glimmer/Vue/React)
templating engine for rendering and handling user input
[reference](https://github.com/ericf/express-handlebars)

### Tasks ###

**POCs**

<!-- * call to crosswords API to get JSON using `fetch` -->
<!-- * render a template using express -->
<!-- * pass JSON data to a template -->
<!--* connect to a MongoDB database-->
<!--* CRUD on the DB-->
* websockets
  <!--- client to server communication-->
  <!--- server to client communication-->
  - server to all clients
  - server to room
  - server to specific socket
* express + hbs + websockets

**UX**

* puzzle rendered to correctly reflect empty puzzle
* clicking on a clue's number highlights and activates the typing space
* clicking on an already highlighted clue switches the active space's direction
* can type into squares vertically
* can type into squares horizontally

**FutureFeatures**

* user accounts
* db access control
* saved progress
* completed test feedback
* clues
* show incorrect clues
* hints?

### Notes ###

**ExpressHandlebars**

`layouts` are html page wrappers with a `{{{body}}}` placeholder
`views` are chosen by the route and rendered into the `{{{body}}}` placeholder
default path of layouts can be configured by setting the `engine`'s `defaultPath` property when initializing in `express`
