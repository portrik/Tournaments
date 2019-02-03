import React from 'react'
import { TextField, Grid } from '@material-ui/core'

// Match represents a game between two teams
class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topScore: 0,
            bottomScore: 0,
        };

        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleBottomScoreChange = this.handleBottomScoreChange.bind(this);
        this.handleTopScoreChange = this.handleTopScoreChange.bind(this);

        // If second team is not set, the first one is automatically chosen as a winner
        if (this.props.bottomTeam === "") {
            this.state.bottomScore = -1;
            this.handleScoreChange();
        }
    }

    // Handles the change of the score for the first team
    // Shows error message in case of invalid input
    handleTopScoreChange(e) {
        if (Number(e.target.value) >= 0 && Number(e.target.value) <= 1000) {
            this.setState({ topScore: Number(e.target.value) });
        }
        else {
            alert("Score must be in the range between 0 and 1000!");
        }
    }

    // Same as handleTopScoreChange only for the bottomTeam
    // Same function can't be used for both since e carries only value and not name of the team
    handleBottomScoreChange(e) {
        if (Number(e.target.value) >= 0 && Number(e.target.value) <= 1000) {
            this.setState({ bottomScore: Number(e.target.value) });
        }
        else {
            alert("Score must be in the range between 0 and 1000!");
        }
    }

    // handleScoreChange calls upon the parent component to handle the change
    handleScoreChange() {
        if (Number(this.state.topScore) > Number(this.state.bottomScore)) {
            this.props.scoreChange(this.props.topTeam, this.props.next);
        }
        else if(Number(this.state.bottomScore) > Number(this.state.topScore)) {
            this.props.scoreChange(this.props.bottomTeam, this.props.next);
        }
    }

    // In case of no second team, the render function
    // Renders a disabled field
    render() {
        return (
            <Grid container direction="column" justify="space-between" alignItems="flex-end" className="matchWrapper">
                <TextField variant="filled" label={this.props.topTeam} value={this.state.topScore} onChange={this.handleTopScoreChange} onBlur={this.handleScoreChange}/>
                {this.props.bottomTeam === "" ?
                    <TextField disabled label="Empty Seed" value={this.state.bottomScore}/> :
                    <TextField variant="filled" label={this.props.bottomTeam} value={this.state.bottomScore} onChange={this.handleBottomScoreChange}  onBlur={this.handleScoreChange}/>}
            </Grid>
        );
    }
};

export default Match;