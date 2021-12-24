import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppAppBar from './app-appbar';
import Panels from './panels';
import { createTheme, ThemeProvider, useMediaQuery, LinearProgress } from '@material-ui/core';
import { useAppSelector } from './redux';
import SvgRouter from './svgs/svg-router';
import AppRoot from './components/app-root';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './theme/theme';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#bb86fc',
        },
        secondary: {
            main: '#018786',
        },
        error: {
            main: '#cf6679',
        },
    },
    // palette: {
    //     type: 'dark',
    //     primary: {
    //         main: '#8ab4f8',
    //     },
    // },
    overrides: {
        MuiDialog: {
            paper: {
                minWidth: 280,
            },
        },
    },
});

const lightTheme = createTheme({
    palette: {
        primary: {
            light: '#bb86fc',
            main: '#6200ee',
        },
        secondary: {
            main: '#018786',
        },
        error: {
            main: '#b00020',
        },
    },
    // palette: {
    //     primary: {
    //         main: '#1a73e8',
    //     },
    //     text: {
    //         primary: '#202124',
    //         secondary: '#5f6368',
    //     },
    // },
    overrides: {
        MuiDialog: {
            paper: {
                minWidth: 280,
            },
        },
    },
});

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = prefersDarkMode ? darkTheme : lightTheme;

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path="/v5/*"
                    element={
                        <ChakraProvider theme={chakraTheme}>
                            <AppRoot />
                        </ChakraProvider>
                    }
                />
                <Route
                    path="*"
                    element={
                        <ThemeProvider theme={theme}>
                            <React.Suspense fallback={<LinearProgress />}>
                                <AppAppBar />
                            </React.Suspense>
                            <AppBody />
                        </ThemeProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

const AppBody = () => {
    const param = useAppSelector(store => store.param);

    const paramString = JSON.stringify(param);
    useEffect(() => {
        window.rmgStorage.writeFile('rmgParam', paramString).then();
    }, [paramString]);

    return (
        <>
            <div style={{ overflowY: 'auto' }}>
                <SvgRouter />
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <Panels />
            </div>

            <canvas style={{ display: 'none' }} />
        </>
    );
};
