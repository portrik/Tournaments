import React from 'react'
import Match from './Match'

class Bracket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: this.props.teams,
        }

        this.addTempTeams();
        this.createBracket = this.createBracket.bind(this);
    }

    addTempTeams()
    {
        var oldTeams = this.props.teams;
        var tempNum = Object.keys(oldTeams).length;
        var teamNeeded = tempNum % 2;

        for(var x = 0; x < teamNeeded; ++x)
        {
            oldTeams.push({
                name: "",
                key: x,
            });
        }

        for(var i = 1; i <= (tempNum - 1); ++i)
        {
            oldTeams.push({
                name: "Winner of match #" + i,
                key: i,
            });
        }

        this.setState({teams: oldTeams});
        console.log(this.state.teams);
    }

    createBracket()
    {
        var returnBracket = [];
        
        for(var matchPerRound = 1; matchPerRound < Object.keys(this.state.teams).length; matchPerRound *= 2)
        {

        }

    }

    createMatch(firstIndex, secondIndex)
    {
        return <Match topTeam={this.state.teams[firstIndex]} bottomTeam={this.state.teams[secondIndex]} />
    }

    render() {
        var bracketRender = this.createBracket();

        return (
            <div id="bracket">

            </div>
        );
    }
}

export default Bracket