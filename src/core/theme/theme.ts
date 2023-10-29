import {createTheme} from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00c8b3'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        backgroundColor: '#00c8b3',
                        color: '#f6f6f6',
                        fontWeight: 'bold',
                        borderRadius: 50,
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        '&:hover': {
                            backgroundColor: '#03e0c6',
                        },
                    }
                },
            ],
        },
    },
});
