import styled from "styled-components"

import Contact from "./Contact"
import { useContactContext } from "../../context/ContactContext"
import DropdownMenuOpeningContextProvider from "../../context/DropdownMenuOpeningContext"
import { useSelector } from "react-redux"
import useFilteredItems from "../../hooks/useFilteredItems"
import mediaQueryBreakpoint from "../../utils/mediaQuery"
import { filteredContactList } from "./ContactSelector"
const StyledContactList = styled.div`
    grid-area: contactList;
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
    }
`

export default function ContactList() {
    
    const filteredContact = useSelector(filteredContactList)
    return (
        <StyledContactList>
                {filteredContact.map(contact => (
                    <Contact contactInfo={contact} key={contact.id}/>
                ))}
        </StyledContactList>
    )
}