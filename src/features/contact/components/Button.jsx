import styled, {css} from "styled-components"

const theme = {
    primary: css`
        background-color: var(--primary-color);
        color: white;
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
    padding: calc(var(--spacing) / 2);
    border: none;
    height: 100%;
    ${(props) => theme[props.theme]};
`
Button.defaultProps = {
    theme: "primary"
}

export default Button