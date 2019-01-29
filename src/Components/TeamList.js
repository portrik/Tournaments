import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'

// Renders out the list of the teams
class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.createTeam = this.createTeam.bind(this);
    }

    // Returns the actual JSX element a team will be rendered as
    createTeam(team) {
        return <ListItem key={team.key}>{team.name}<Delete className="delete" onClick={() => this.handleDelete(team.key)} /></ListItem>
    }

    // Handles the deletion of a team
    handleDelete(key) {
        this.props.delete(key);
    }

    render() {
        var teams = this.props.teams;
        var listTeams = teams.map(this.createTeam);

        return (
            <List className="theList">
                {listTeams}
            </List>
        );
    }
}

export default TeamList