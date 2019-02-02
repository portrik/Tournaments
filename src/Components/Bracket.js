import React from 'react'
import Match from './Match'

// Bracket is the main component of the whole app
// It renders the tournament bracket and it also carries the logic of the app
class Bracket extends React.Component {

    // Constructor sets component-wide variables and binds the component's functions
    // It also makes the additional teams
    constructor(props) {
        super(props);

        this.state = {
            teams: [],
            numOfTeams: Object.keys(this.props.teams).length,
        }

        this.addTempTeams();
        this.createRound = this.createRound.bind(this);
        this.createBracket = this.createBracket.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
    }

    // To make the whole app more user friendly
    // addTempTeams creates temporary teams, which are deleted
    // when a real team gets to their spot
    addTempTeams() {

        for (var i = 0; i < Object.keys(this.props.teams).length; ++i) {
            this.state.teams.push(this.props.teams[i].name);
        }

        for (i = 1; i <= (this.state.numOfTeams - 1); ++i) {
            this.state.teams.push("Winner of match #" + i);
        }
    }

    // Create round creates a whole batch of matches
    // In case there isn't an even number of teams
    // It creates a free spot when the last team in the bracket
    // Automatically wins

    // start - the starting point, from which teams are chosen
    // end - ending point for choosing teams
    createRound(start, end) {
        var round = []; // Array of components in the round
        var tempStart = start; // Offset from which the next match is calculated

        for (var i = start; i < end - 2; i += 2) {
            round.push(<Match topTeam={this.state.teams[i]} bottomTeam={this.state.teams[i + 1]} scoreChange={this.handleScoreChange} next={end - start + tempStart} />);
            ++tempStart;
        }

        // Checks if a free spot needs to be created
        if ((end - start) % 2 !== 0) {
            round.push(<Match topTeam={this.state.teams[i]} bottomTeam={""} scoreChange={this.handleScoreChange} next={end - start + tempStart} />);
        }
        else {
            round.push(<Match topTeam={this.state.teams[i]} bottomTeam={this.state.teams[i + 1]} scoreChange={this.handleScoreChange} next={end - start + tempStart} />);
        }

        return round;
    }

    // Create bracket takes care of all the rounds
    // And adds a winner spot at the end
    createBracket() {
        var bracket = [];
        var index = 0;

        for (var i = this.state.numOfTeams; i > 1; i = Math.round(i / 2)) {
            bracket.push(
                <ul className="round">
                    {this.createRound(index, index + i)}
                </ul>);

            index += i;
        }

        // Field with the tournament winner
        bracket.push(
            <ul className="winner round">{this.state.teams[Object.keys(this.state.teams).length - 1]}</ul>
        );

        return bracket;
    }

    // handleScoreChange is called from a Match component
    // It creates a temporary array in which a team is set into their new spot

    // Value - the name of the team
    // Next - the index of the new position
    handleScoreChange(value, next) {
        var temparray = this.state.teams.slice();
        temparray[next] = value;
        this.setState({ teams: temparray });
    }

    render() {
        var bracket = this.createBracket();

        return (
            <div id="bracket">
                {bracket}
            </div>
        );
    }
}

export default Bracket