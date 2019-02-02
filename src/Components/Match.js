import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'

class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "" };

        this.handleScoreChange = this.handleScoreChange.bind(this);

        if (this.props.bottomTeam === "") {
            this.setState({ value: this.props.topTeam });
        }
    }

    handleScoreChange(e) {
        this.setState({ value: e.target.value });

        this.props.scoreChange(e.target.value, this.props.next);

    }

    render() {
        return (
            <div>
                <li className="spacer">&nbsp;</li>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="Match" value={this.state.value} onChange={this.handleScoreChange}>
                        <FormControlLabel value={this.props.topTeam} control={<Radio />} label={this.props.topTeam} />
                        <span className="game game-spacer">&nbsp;</span>
                        {this.props.bottomTeam === "" ? <FormControlLabel disabled value="No Oponent" control={<Radio />} label="No Oponent" /> : <FormControlLabel value={this.props.bottomTeam} control={<Radio />} label={this.props.bottomTeam} />}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
};

export default Match