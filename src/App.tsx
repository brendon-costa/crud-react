import './App.css'
import {Register} from "./pages/register";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App
