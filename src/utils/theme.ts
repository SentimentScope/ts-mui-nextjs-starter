const themeStyle = require('../../content/data/style.json');
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        mode: themeStyle.mode ?? 'light',
        primary: {
            main: themeStyle.primaryColor ?? '#413C58'
        },
        secondary: {
            main: themeStyle.secondaryColor ?? '#2A3D45'
        },
        text: {
            primary: themeStyle.mode === 'dark' ? '#F0F0F0' : '#333333',
            secondary: themeStyle.mode === 'dark' ? '#374151' : '#979797'
        }
    },
    typography: {
        h1: {
            fontWeight: 500
        },
        h2: {
            fontWeight: 500
        },
        h3: {
            fontWeight: 500
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;
