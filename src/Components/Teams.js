import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TeamList from './TeamList';
import Bracket from './Bracket'

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
    }

    // Adds team to the dictionary with time as it's key
    // For simplicity the name is limited to 20 characters
    handleAddTeam(e) {
        if (this.state.newTeam !== "" && this.state.newTeam.length <= 20) {
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
        };

        // Prevents the page from being reloaded
        e.preventDefault();
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
        this.setState({ newTeam: e.target.value });
    }

    // Renders out the bracket
    handleCreateBracket(e) {
        this.setState({ showBracket: true });
        e.preventDefault();
    }

    render() {
        return (
            <div className="listOfTeams">
                <form onSubmit={this.handleAddTeam}>
                    <TextField placeholder="Enter a team name" value={this.state.newTeam} onChange={this.handleChange}></TextField>
                    <Button type="submit" variant="contained" color="primary">Add team</Button>
                </form>

                <form onSubmit={this.handleCreateBracket}>
                    <Button type="submit" variant="contained" color="primary">Create Tounrmanet Bracket</Button>
                </form>

                <TeamList teams={this.state.teams} delete={this.handleDelete} />

                {this.state.showBracket ? <Bracket teams={this.state.teams} /> : null}
            </div>
        )
    }
}

export default Teams;