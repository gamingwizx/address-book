import styled, {css} from "styled-components";
import mediaQueryBreakpoint from "../utils/mediaQuery";
const size = {
    normal: css`
        font-size: 1rem;

        @media(max-width: ${mediaQueryBreakpoint.large}) {
            font-size: 1rem;
        }

        @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
            font-size: 0.8rem;
        }
    `,
    large: css`
        font-size: 2rem;

        @media(max-width: ${mediaQueryBreakpoint.large}) {
            font-size: 1.4rem;
        }
    `,
    extralarge: css`
        font-size: 2.2rem;

        @media(max-width: ${mediaQueryBreakpoint.large}) {
            font-size: 1.7rem;
        }
    `
}
const weight = {
    normal: css`
        font-weight: normal;
    `,
    bold: css`
        font-weight: bold;
    `
}
const color = {
    black: css`
        color: black;
    `,
    primary: css`
        color: var(--primary-color);
    `,
    white: css`
        color: white;
    `
}
const StyledLabel = styled.label`
    ${(props) => color[props.color]};
    ${(props) => weight[props.weight]};
    ${(props) => size[props.size]};
`
StyledLabel.defaultProps = {
    weight: "normal",
    color: "black",
    size: "normal"
}

export default StyledLabel