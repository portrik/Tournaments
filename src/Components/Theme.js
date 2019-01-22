import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

// Theme.js uses Material-UI framework (https://material-ui.com/) to make the app beautiful

//Theme contains variables with primary color of the app and forces the app to use Roboto as it's font
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

//Theme is a class that wraps other elements and passes it's theme onto them
class Theme extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>
        )
    }
}

//Exports the Theme component so other files can use it
export default Theme;