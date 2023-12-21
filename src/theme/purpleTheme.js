import { createTheme } from '@mui/material';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#BD93F9',
        },
        secondary: {
            main: '#6272A4',
        },
        error: {
            main: '#FF5555',
        },
        background: {
            default: '#282A36',
            paper: '#44475A',
        },
        text: {
            primary: '#F8F8F2',
            secondary: '#6272A4',
        },
    },
});