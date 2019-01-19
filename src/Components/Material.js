import { Toolbar, Typography, AppBar, Grid } from '@material-ui/core';
import Theme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react';

class Material extends React.Component {
    render() {
        return (
            <Theme>
                <CssBaseline />
                <AppBar position="static" style={{ margin: 0 }}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">Tournaments</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justify="center" alignItems="center">
                {this.props.children}
                </Grid>
            </Theme>
        )
    }
}

export default Material;