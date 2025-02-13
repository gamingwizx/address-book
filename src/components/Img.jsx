import styled, {css} from "styled-components";

const size = {
    small: css`
        width: 1.5em;
        height: 1.5em;
    `,
    normal: css`
        width: 100%;
        height: 100%;
    `
}

const Img = styled.img`
    ${(props) => size[props.size]};
    border-radius: ${(props) => props.round === "true" && '50%'};
`
Img.defaultProps = {
    size: "normal"
}

export default Img