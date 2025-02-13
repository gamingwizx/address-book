import styled, {css} from "styled-components";

import mediaQueryBreakpoint from "../utils/mediaQuery";

const theme = {
    primary: css`
        background-color: var(--primary-color);
    `,
    secondary: css`
        background-color: var(--white);
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        `,
        warning: css`
        background-color: red;
        color: white;
        border: 1px solid red;
    `
}
const Button = styled.button`
    color: white;
    height: 100%;
    border: none;
    ${(props) => theme[props.theme]};

    @media (max-width: ${mediaQueryBreakpoint.large}) {
        font-size: 1rem;
    }
`
Button.defaultProps = {
    theme: "primary"
}

export default Button