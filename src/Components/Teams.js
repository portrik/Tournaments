import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TeamList from './TeamList';

class Teams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTeam: "",
            teams: []
        };

        this.handleAddTeam = this.handleAddTeam.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

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

            this.setState({newTeam: ""});
        };


        e.preventDefault();
    }

    handleDelete(key)
    {
        var filteredList = this.state.teams.filter(function (team) {
            return(team.key !== key);
        })

        this.setState({
            teams: filteredList
        })
    }

    handleChange(e)
    {
        this.setState({newTeam: e.target.value});
    }

    render() {
        return (
            <div className="listOfTeams">
                <form onSubmit={this.handleAddTeam}>
                    <TextField placeholder="Enter a team name" value={this.state.newTeam} onChange={this.handleChange}></TextField>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>

                <TeamList teams={this.state.teams} delete={this.handleDelete}/>
            </div>
        )
    }
}

export default Teams;