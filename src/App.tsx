import './App.css'
import {Register} from "./pages/register";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {DarkTheme} from "./core/theme/theme.ts";

function App() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/register-form" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App
