import React from 'react';
import { Grid, TextField, ListItem, Card, Typography, CardContent, List } from '@material-ui/core';


// Bye serves as a 0 round to make the number of teams compatible with the bracket system
// It connects two matches together, where from 3 teams one progresses as the winner
class Bye extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: [],
        }

        this.handleScoreChange = this.handleScoreChange.bind(this);
    }

    componentDidMount()
    {
        var newScores = [];

        for (var i = 0; i < Object.keys(this.props.teams).length; ++i) {
            newScores.push(0);
        }

        this.setState({ scores: newScores });
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

    createByes() {
        var matches = [];

        for (var i = 0; i < Object.keys(this.props.teams).length; i += 2) {
            matches.push(<ListItem>
                <TextField variant="filled" label={this.props.teams[i]} value={this.state.scores[i]} onChange={this.handleTopScoreChange} onBlur={this.handleScoreChange} />
                <Typography variant="h6" gutterBottom>vs</Typography>
                <TextField variant="filled" label={this.props.teams[i + 1]} value={this.state.scores[i + 1]} onChange={this.handleTopScoreChange} onBlur={this.handleScoreChange} />
            </ListItem>);
        }

        return matches;
    }

    render() {
        var matches = this.createByes();

        return (
            <Grid container direction="column" justify="space-evenly" alignItems="center" className="matchWrapper">
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>Bye Round</Typography>
                        <List className="theList">
                            {matches}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default Bye;