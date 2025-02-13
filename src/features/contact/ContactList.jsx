import styled from "styled-components"

import Contact from "./Contact"
import { useSelector } from "react-redux"
import mediaQueryBreakpoint from "../../utils/mediaQuery"
import { filteredContactListForDisplay } from "./redux/ContactSelector"
import DropdownMobileContextProvider from "./context/DropdownMobileContext"
import StyledLabel from "../../components/Label"
const StyledContactList = styled.div`
    grid-area: contactList;
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
    }
`

export default function ContactList() {
    
    const contactList = useSelector(filteredContactListForDisplay)
    const isContactsEmpty = contactList.length <= 0
    return (
        <DropdownMobileContextProvider>
            <StyledContactList>
                {isContactsEmpty && <StyledLabel>You have no contacts, start adding one now!</StyledLabel>}
                    {contactList.map(contact => (
                        <Contact contactInfo={contact} key={contact.id}/>
                    ))}
            </StyledContactList>

        </DropdownMobileContextProvider>
    )
}