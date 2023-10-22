import { createGlobalStyle } from 'styled-components'

import { Home } from './pages/Home'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }
`

export const App = () => (
    <>
        <GlobalStyle />
        <Home />
    </>
)
