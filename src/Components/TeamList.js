import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

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

    // List of team is displayed in a Card component
    // Only if the list of teams is not empty
    render() {
        var teams = this.props.teams;
        var listTeams = teams.map(this.createTeam);

        return (
            <Grid container direction="column" justify="center" alignItems="center" className="listOfTeams">
                {Object.keys(this.props.teams).length > 0 ? <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>Selected Teams</Typography>
                        <List className="theList">
                            {listTeams}
                        </List>
                    </CardContent>
                </Card> : null}
            </Grid>
        );
    }
}

export default TeamList