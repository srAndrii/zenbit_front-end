import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Provider} from "react-redux"
import store from "./redux/store";


const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Apercu Arabic Pro;
}
body {
  margin: 0;
  font-family: Apercu Arabic Pro, sans-serif;
  box-sizing: border-box;
}
`
const theme = {
    media: {
        phone: "(max-width: 996px)",
        tablet: "(max-width: 1440px) and (min-width: 996px)",
    },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Global/>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

