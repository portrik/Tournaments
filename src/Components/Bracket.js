import React from 'react'
import Match from './Match'

class Bracket extends React.Component {
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

    addTempTeams() {

        for (var i = 0; i < Object.keys(this.props.teams).length; ++i) {
            this.state.teams.push(this.props.teams[i].name);
        }

        for (i = 1; i <= (this.state.numOfTeams - 1); ++i) {
            this.state.teams.push("Winner of match #" + i);
        }
    }

    createRound(start, end) {
        var round = [];
        var tempStart = start;

        for (var i = start; i < end - 2; i += 2) {
            round.push(<Match topTeam={this.state.teams[i]} bottomTeam={this.state.teams[i + 1]} scoreChange={this.handleScoreChange} next={end - start + tempStart} />);
            ++tempStart;
        }

        if ((end - start) % 2 !== 0) {
            round.push(<Match topTeam={this.state.teams[i]} bottomTeam={""} scoreChange={this.handleScoreChange} next={end - start + tempStart} />);
        }
        else {
            round.push(<Match topTeam={this.state.teams[i]} bottomTeam={this.state.teams[i + 1]} scoreChange={this.handleScoreChange} next={end - start + tempStart} />);
        }

        return round;
    }

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

        bracket.push(
            <ul className="winner round">{this.state.teams[Object.keys(this.state.teams).length - 1]}</ul>
        );

        return bracket;
    }

    handleScoreChange(value, next) {

        var temparray = this.state.teams.slice();
        temparray[next] = value;
        console.log(next);
        this.setState({ teams: temparray });
    }

    render() {
        var bracket = this.createBracket();
        console.log(this.state.teams);
        
        return (
            <div id="bracket">
                {bracket}
            </div>
        );
    }
}

export default Bracket