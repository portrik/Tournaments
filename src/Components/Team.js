import React, {Component} from 'react';

class Team extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        var circleStyle = {
            color: this.state.color,
        };

        return(
            <span className="team">
                <span className="circle circleStyle"></span>
                {this.state.teamName}
            </span>
        )
    };
};

export default Team;