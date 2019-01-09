import React, { Component } from 'react';
import Team from './Team'

class TeamList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            teams: [],
        };
    }

    handleAddTeam()

    render()
    {
        return(
            <div id="teamlist">
                <h2>Teams</h2>
                <ul>{this.teams}</ul>
            </div>
        );
    }
};

export default TeamList