import styled from "styled-components"

import Search from "./Search"

import mediaQueryBreakpoint from "../../utils/mediaQuery"
import AddNewContactButton from "./AddNewContactButton"
const StyledContactHeader = styled.div`
    grid-area: contactHeader;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: calc(var(--spacing) * 3);

    @media (max-width: ${mediaQueryBreakpoint.large}) {
        gap: calc(var(--spacing) * 2);
    }
    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        gap: calc(var(--spacing));
    }
`

export default function ContactHeader() {
    return (
        <StyledContactHeader>
            <Search/>
            <AddNewContactButton/>
        </StyledContactHeader>
    )
}