import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    html, body{
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }

    :root {
        --spacing: 1em;
        --border-radius: 1em;
        --primary-color: #827CD2;
    }
`

export default global