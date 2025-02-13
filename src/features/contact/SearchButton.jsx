import styled from "styled-components";

import mediaQueryBreakpoint from "../../utils/mediaQuery";

const StyledButton = styled.button`
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
    // padding: calc(var(--spacing) * 2);
    width: 5rem;
    background-image: url('/search1.svg');
    background-size: 1.3rem;
    background-repeat: no-repeat;
    background-position: center;
    border: none;

    @media (max-width: ${mediaQueryBreakpoint.large}) {
        background-size: 1.5rem;
    }
    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        width: 3rem;

    }
`

export default StyledButton