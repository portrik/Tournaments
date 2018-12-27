import React, {PureComponent} from 'react';
import AddTeam from './AddTeam';

class HomePage extends PureComponent
{

    render()
    {
        return(
            <div id="homepage">
                <h1>Tournaments</h1>

                <div>
                    <h2>Add Teams</h2>
                    <AddTeam />
                    <AddTeam />
                    <AddTeam />
                    <AddTeam />
                </div>
            </div>
        );
    }
};

export default HomePage;