import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff5722',
        },
        type: 'dark',
    },
    typography: {
        useNextVariants: true,
    },
});

class Theme extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>
        )
    }
}

export default Theme;