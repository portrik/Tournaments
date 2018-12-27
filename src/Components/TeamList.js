import React, { Component } from 'react';

class TeamList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {teams: []}
    }

    

    render()
    {
        return(
            <div id="teamlist">
                <h2>Teams</h2>
                <table>
                    <tr className="tableheader">

                    </tr>
                </table>
            </div>
        );
    };
};