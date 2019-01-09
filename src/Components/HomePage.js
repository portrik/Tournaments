import React, {Component} from 'react';
import TeamList from './TeamList';

class HomePage extends Component
{

    render()
    {
        return(
            <div id="homepage">
                <h1>Tournaments</h1>

                <div>
                    <TeamList></TeamList>
                </div>
            </div>
        );
    }
};

export default HomePage;