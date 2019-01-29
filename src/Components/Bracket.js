import React from 'react'
import Match from './Match'

class Bracket extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="bracket">
                <ul className="round round-1">
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                </ul>
                <ul className="round round-2">
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                </ul>
                <ul className="round round-3">
                    <Match topTeam="Hello" bottomTeam="There" />
                    <Match topTeam="Hello" bottomTeam="There" />
                </ul>
                <ul className="round round-4">
                    <Match topTeam="Hello" bottomTeam="There" />
                </ul>
            </div>
        );
    }
}

export default Bracket