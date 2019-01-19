import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'

class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.createTeams = this.createTeams.bind(this);
    }

    createTeams(team) {
        return <ListItem key={team.key}>{team.name}<Delete onClick={() => this.handleDelete(team.key)} /></ListItem>
    }

    handleDelete(key) {
        this.props.delete(key);
    }

    render() {
        var teams = this.props.teams;
        var listTeams = teams.map(this.createTeams);

        return (
            <List className="theList">
                {listTeams}
            </List>
        );
    }
}

export default TeamList