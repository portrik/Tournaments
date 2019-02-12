import React from 'react';
import { Grid, TextField, ListItem, Card, Typography, CardContent, List, Button } from '@material-ui/core';


// Bye serves as a 0 round to make the number of teams compatible with the bracket system
class Bye extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winners: [],
        }

        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleByeResults = this.handleByeResults.bind(this);
    }

    // Handles the sending the list of winners to the parent component
    // It checks, if all winners are set 
    handleByeResults(e) {
        e.preventDefault();
        var areEmpty = false;

        this.state.winners.forEach(function (team) {
            if (team === "") {
                areEmpty = true;
            }
        });

        if (areEmpty) {
            alert("All bye round matches must have a clear winner!");
        }
        else {
            this.props.onDone(this.state.winners);
        }
    }

    // After all of the props are passed
    // This function creates an empty list of winners
    componentDidMount() {
        var newWinners = [];

        for (var i = 0; i < this.props.numOfMatches; ++i) {
            newWinners.push("");
        }

        this.setState({ winners: newWinners });
    }

    // Decides, if the score change should be handled here or passed to parent
    // Team is the name of the winning team
    // Index is position in the list of winners
    handleScoreChange(team, index) {
        var newWinners = [];

        for (var i = 0; i < Object.keys(this.state.winners).length; ++i) {
            if (index === i) {
                newWinners.push(team);
            }
            else {
                newWinners.push(this.state.winners[i]);
            }
        }

        this.setState({ winners: newWinners });
    }

    // Creates all the Bye round matches
    createByes() {
        var matches = [];

        for (var i = 0; i < (this.props.numOfMatches * 2); i += 2) {
            matches.push(<ByeRound index={Math.floor(i / 2)} topTeam={this.props.teams[i]} bottomTeam={this.props.teams[i + 1]} onScoreChange={this.handleScoreChange} />);
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
                        <form onSubmit={this.handleByeResults}>
                            <Button className="bracketButton" type="submit" variant="contained" color="primary">Confirm Bye Round Results</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

// Bye round is a subcomponent of Byes
// It houses the logic of a bye round match
// It is structured similiarly to Match.js
// Only difference is the rendering style - Match places team vertically, while ByeRound is horizontal
class ByeRound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topScore: 0,
            bottomScore: 0,
        }

        this.handleTopScoreChange = this.handleTopScoreChange.bind(this);
        this.handleBottomScoreChange = this.handleBottomScoreChange.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
    }

    handleTopScoreChange(e) {
        if (Number(e.target.value) >= 0 && Number(e.target.value) <= 1000) {
            this.setState({ topScore: Number(e.target.value) });
        }
        else {
            alert("Score must be in the range between 0 and 1000!");
        }
    }

    handleBottomScoreChange(e) {
        if (Number(e.target.value) >= 0 && Number(e.target.value) <= 1000) {
            this.setState({ bottomScore: Number(e.target.value) });
        }
        else {
            alert("Score must be in the range between 0 and 1000!");
        }
    }

    handleScoreChange() {
        if (this.state.topScore > this.state.bottomScore) {
            this.props.onScoreChange(this.props.topTeam, this.props.index);
        }
        else if (this.state.topScore < this.state.bottomScore) {
            this.props.onScoreChange(this.props.bottomTeam, this.props.index);
        }
    }

    render() {
        return (
            <ListItem>
                <TextField variant="filled" label={this.props.topTeam} value={this.state.topScore} onChange={this.handleTopScoreChange} onBlur={this.handleScoreChange} />
                <Typography variant="h6" gutterBottom>vs</Typography>
                <TextField variant="filled" label={this.props.bottomTeam} value={this.state.bottomScore} onChange={this.handleBottomScoreChange} onBlur={this.handleScoreChange} />
            </ListItem>
        )
    }
}

export default Bye;