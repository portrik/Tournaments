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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">Tournaments</Typography>
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