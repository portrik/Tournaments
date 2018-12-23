import React, {Component} from 'react';
import { CirclePicker } from 'react-color';

class AddTeam extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {name: ''};
        this.state = {teamColor: '#f44336'};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({name: event.target.value})
    }

    handleSubmit(event)
    {
        alert('The name you submited is ' + this.state.name);
        alert('The color you picked is ' + this.state.teamColor);
        event.preventDefault();
    }

    handleChangeComplete = (color) =>
    {
        this.setState({teamColor: color.hex});
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name of the team:   
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <CirclePicker color={this.state.teamColor} onChangeComplete={this.handleChangeComplete}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddTeam;