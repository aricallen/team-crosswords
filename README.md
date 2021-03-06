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

...

### Overview ###

**Server**
Node:
backend server/host

**Routing**
Express:
router and API for different pages and handling internal http calls

**DB**
MongoDB/Mongoose:
holds the persistant state of the user accounts and their progress

**Views**
ExpressHandlebars: (may refactor later to just ES6 or Glimmer/Vue/React)
templating engine for rendering and handling user input

### Tasks ###

**Proof of Concepts**

* call to crosswords API to get JSON using `fetch`
* render a template using express
* pass JSON data to a template
* connect to a MongoDB database
* CRUD on the DB

**UX**

* puzzle rendered to correctly reflect empty puzzle
* clicking on a clue's number highlights and activates the typing space
* clicking on an already highlighted clue switches the active space's direction
* can type into squares vertically
* can type into squares horizontally

**Features**

* user accounts
* saved progress
* completed test feedback
* clues
* show incorrect clues
* hints?
