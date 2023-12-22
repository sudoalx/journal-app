import { createTheme } from '@mui/material';

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#1976D2', // Dark blue color
        },
        secondary: {
            main: '#607D8B', // Another shade of blue for secondary
        },
        error: {
            main: '#FF5555',
        },
        background: {
            default: '#1A1A2E', // Dark blue background
            paper: '#25274D', // Slightly lighter background for paper elements
        },
        text: {
            primary: '#E1E1E6', // Light gray text
            secondary: '#6272A4', // Another shade of blue for secondary text
        },
    },
});
