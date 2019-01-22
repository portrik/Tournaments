import React from 'react'

class Bracket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: false,
        }
    }

    render() {
        return (
            <div id="bracket">
                <ul className="round round-1">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">1<span>3</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">2<span>2</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">3<span>4</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">4<span>2</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">5<span>5</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom">6<span>8</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">7<span>4</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">8<span>5</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">9<span>4</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">10<span>2</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">11<span>5</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">12<span>4</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">13<span>2</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">14<span>3</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">15<span>3</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">16<span>1</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-2">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">1<span>2</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">3<span>1</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">6<span>4</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">8<span>1</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">9<span>0</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom">11<span>1</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">14<span>5</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom">15<span>0</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-3">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">1<span>2</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">6<span>0</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">11<span>2</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom">14<span>3</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-4">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top">1<span>1</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">14<span>0</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
            </div>
        );
    }
}

export default Bracket