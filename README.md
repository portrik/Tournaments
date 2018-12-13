# Tournaments

Software for planning and keeping score of tournaments in various formats.

## Overview

Tournaments is a software meant to plot and keep track of competitions in various sports. 

### Problem

Keeping track of tournaments can get messy and, at times, can even ruin the whole competition. That's where Tournaments comes in.

### Goals

* Support for various sports (football, basketball, volleybal...)
* Support for different tournament formats (shown later in the document)
* Accessibility and easy-to-use interface
* Nice graphs and whatnot

All of these goals should serve as metrics of success - the more sports and formats are supported while not making the whole software a mess, the better.

#### V1.0

* Swiss-system
* Web based
* Basic UI

## Current Solutions

### Web-based or mobile apps

They can be hard to use, ugly or just old and unintuitive. Sometimes all at the same time.

### Excel Spredsheets

They are infuriating. They are old school. They are not so pretty.

### Handwritten tables

Same as Excel. But worse. Much worse.

## Proposed Solution

Nice and clean web-app made with React and other frameworks. Choosing a format, sport, setting up competitors and going through the whole tournament should be easy and fun.

## Tournament systems

### Swiss-system 

A Swiss-system tournament is a non-eliminating tournament format which features a set number of rounds of competition. Each competitor (team or individual) does not play every other. Competitors meet one-to-one in each round and are paired using a set of rules designed to ensure that each competitor plays opponents with a similar running score, but not the same opponent more than once. The winner is the competitor with the highest aggregate points earned in all rounds. All competitors play in each round unless there is an odd number of players.

### Round-robin 

A round-robin tournament (or all-play-all tournament) is a competition in which each contestant meets all other contestants in turn.

### Elimination

Elimination tournament is divided into successive rounds; each competitor plays in at least one fixture per round. The top-ranked competitors in each fixture progress to the next round. As rounds progress, the number of competitors and fixtures decreases. The final round, usually known as the final or cup final, consists of just one fixture; the winner of which is the overall champion.

### Group ranking system

In a group tournament, unlike a knockout tournament, there is no scheduled decisive final match. Instead, all the competitors are ranked by examining the results of all the matches played in the tournament. Typically, points are awarded for each match,[n 1] with competitors ranked based either on total number of points or average points per match. Usually each competitor finishes with an equal number of matches, in which case rankings by total points and by average points are equivalent at the end of the tournament, though not necessarily while it is in progress.