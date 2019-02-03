import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TeamList from './TeamList';
import Bracket from './Bracket'
import { Grid } from '@material-ui/core';

// The Teams component handles adding and removing teams
// and it renders out the interactive bracket afterwards
class Teams extends React.Component {

    // constructor initializes local variables (state) as well as passed-on variables (props)
    // It also handles binding of local functions
    constructor(props) {
        super(props);

        this.state = {
            newTeam: "",
            showBracket: false,
            teams: []
        };

        this.handleAddTeam = this.handleAddTeam.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreateBracket = this.handleCreateBracket.bind(this);
        this.teamIsDuplicate = this.teamIsDuplicate.bind(this);
    }

    // Adds team to the dictionary with time as it's key
    // For simplicity the name is limited to 20 characters
    // Shows error message in case of invalid input
    handleAddTeam(e) {
        if (this.state.newTeam !== "" && !this.teamIsDuplicate(this.state.newTeam)) {
            var newTeam = {
                name: this.state.newTeam,
                key: Date.now(),
            };

            this.setState((prevState) => {
                return {
                    teams: prevState.teams.concat(newTeam)
                };
            });

            this.setState({ newTeam: "" });
        }
        else {
            window.alert("Invalid team name was selected!\nNames have to be at least 1 character long!\nNames cannot be duplicate!");
        }

        // Prevents the page from being reloaded
        e.preventDefault();
    }

    // Checks if the name of the team is duplicate
    teamIsDuplicate(name) {
        var isDuplicate = false;

        for (var i = 0; i < Object.keys(this.state.teams).length; ++i) {
            if (this.state.teams[i].name === name) {
                isDuplicate = true;
            }
        }
        return isDuplicate;
    }

    // Deletes the team from the list
    handleDelete(key) {
        var filteredList = this.state.teams.filter(function (team) {
            return (team.key !== key);
        })

        this.setState({
            teams: filteredList
        })
    }

    // Handles changes in the input field
    // It is needed because the value in the field is always equal to variable newTeam
    // Without handle function the user is unable to change it's value
    handleChange(e) {
        if (e.target.value.length <= 20) {
            this.setState({ newTeam: e.target.value });
        }
    }

    // Renders or hides the bracket
    // Shows an error message in case not enough teams were selected
    handleCreateBracket(e) {
        if (Object.keys(this.state.teams).length > 1) {
            this.setState({ showBracket: !this.state.showBracket });
        }
        else {
            alert("Not enough teams were selected!\nThere need to be at least 2 teams to generate a tournament!");
        }

        e.preventDefault();
    }

    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                {this.state.showBracket ?
                    <Grid container direction="column" justify="center" alignItems="center">
                        <form onSubmit={this.handleCreateBracket}>
                            <Button className="bracketButton" type="submit" variant="contained" color="primary">Change Teams</Button>
                        </form>
                        <Bracket teams={this.state.teams} />
                    </Grid> :
                    <Grid container direction="column" justify="center" alignItems="center">
                        <form onSubmit={this.handleAddTeam}>
                            <TextField placeholder="Enter a team name" value={this.state.newTeam} onChange={this.handleChange}></TextField>
                            <Button id="teamButton" type="submit" variant="contained" color="primary">Add team</Button>
                        </form>
                        <TeamList teams={this.state.teams} delete={this.handleDelete} />
                        <form onSubmit={this.handleCreateBracket}>
                            <Button className="bracketButton" type="submit" variant="contained" color="primary">Create Tournament</Button>
                        </form>
                    </Grid>}
            </Grid>
        )
    }
}

export default Teams;