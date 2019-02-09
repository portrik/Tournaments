# Tournaments

Software for planning and keeping score of tournaments in the spider format.

It was created as school project at [MFF UK](https://mff.cuni.cz).

Live demo can be found at [Github pages](https://tehsirius.github.io/Tournaments/).

## Overview

Tournaments is an app created for generating a tournament bracket in the spider format. It can handle teams from various sports and is fully interactive. It is hosted fully on the internet and the whole algorithm is executed on the client side. 

It is created with JavaScript and mainly the React framework. The design is created with the [Material UI](https://material-ui.com/).

## Algorithm

The whole app is created with various components. They serve as a building blocks that are assembled and rendered with React.

### Index.js

The main component serves as an entry point for the whole app. It targets a selected div element in the frontend facing HTML file and renders it's contents inside it.

It calls the Material wrapper component, which houses the Material theme hosted inside Theme.js, the toolbar, and CSSBaseline component for nicer looks.

### Teams.js

This component handles most of the interaction with the user. It lets him add and remove team names. It renders the list of the teams through TeamList.js.

When the user is done with adding new teams, it passes the names to Bracket.js, which handles the creation of the bracket.

### Bracket.js

Bracket houses the main logic of the app. When passed the team names, it creates filler team names (Winner of match #) and divides them into rounds.

In case the number of selected teams is odd, bye round is generated. A number of teams are eliminated in the bye round to make the number of teams fit the spider system.

The user than chooses winners through inputing the game results a winner.


## Input data

### When choosing teams

* A team name can be typed into the textfield with label *Enter a team name*. The name can be madeup of letters, numbers or symbols. Minimum length is 1 and the maximum is 20
* When the name is chosen, it can be added to the list with the button labeled *Add Team*
* Team name can be deleted with the trashcan button next to the name
* Bracket can be created with the button labeled *Create Tournament*

### Bye round

* A winner of the match is chosen through inputing a game result
* Only a team with higher score is chosen as a winner
* Draws are not possible
* The bye round can be ended by pressing the *Confirm Bye Round Results* button

### Choosing winners

* All matches are divided into the tournament spider bracket
* Unplayed matches have no winner
* Winner will be chosen after both scores are set
* Score can be changed by clicking on the input field with the number (Scores can be between 0 and 1 000)