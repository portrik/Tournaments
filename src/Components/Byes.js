import React from 'react';
import Match from './Match'
import { Grid } from '@material-ui/core';


// Bye serves as a 0 round to make the number of teams compatible with the bracket system
// It connects two matches together, where from 3 teams one progresses as the winner
class Bye extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            team1: this.props.team1,
            team2: this.props.team2,
            team3: this.props.team3,
            team4: this.props.team4,
        }

        this.handleScoreChange = this.handleScoreChange.bind(this);
    }

    // Decides, if the score change should be handled here or passed to parent
    handleScoreChange(team, next)
    {
        if(next)
        {
            this.props.scoreChange(team, this.props.next);
        }
        else
        {
            this.setState({team3: team});
        }
    }

    render()
    {
        return(
            <Grid container direction="row" justify="center" alignItems="center">
                <Match topTeam={this.state.team1} bottomTeam={this.state.team2} scoreChange={this.handleScoreChange} next={0} />
                <Match topTeam={this.state.team3} bottomTeam={this.state.team4} scoreChange={this.handleScoreChange} next={1} />
            </Grid>
        );
    }
}

export default Bye;