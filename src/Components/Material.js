import { Toolbar, Typography, AppBar, Grid } from '@material-ui/core';
import Theme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react';

// The Material components renders the navbar and Grid container for it's child components
class Material extends React.Component {
    render() {
        return (
            <Theme>
                <CssBaseline />
                <AppBar position="static" className="toolBar">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">Tournaments</Typography>
                        <a href="https://github.com/tehSIRius/tournaments" target="blank" className="githubLink">
                            <img src="Github.png" width="36" height="36" title="This project is available on Github!" alt="Github link" />
                        </a>
                    </Toolbar>
                </AppBar>
                <Grid container>
                    {this.props.children}
                </Grid>
            </Theme>
        )
    }
}

export default Material;