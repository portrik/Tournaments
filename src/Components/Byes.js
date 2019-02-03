import React from 'react';
import { Grid, TextField } from '@material-ui/core';


// Bye serves as a 0 round to make the number of teams compatible with the bracket system
// It connects two matches together, where from 3 teams one progresses as the winner
class Bye extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [],
        }

        this.handleScoreChange = this.handleScoreChange.bind(this);
    }

    // Decides, if the score change should be handled here or passed to parent
    handleScoreChange(team, next) {
        if (next) {
            this.props.scoreChange(team, this.props.next);
        }
        else {
            this.setState({ team3: team });
        }
    }

    createByes()
    {
        var matches = [];

        for(var i = 0; i < this.props.byeTeams; ++i)
        {
            matches.push(
                <div>
                    <TextField label={}
                </div>
            )
        }
    }

    render() {
        return (
            <Grid container direction="column" justify="space-evenly" alignItems="center" className="matchWrapper">
                <Grid container direction="row" justify="center" alignItems="center">
                
                </Grid>
            </Grid>
        );
    }
}

export default Bye;