import styled from "styled-components"
import ContactList from "./ContactList"
import ContactHeader from "./ContactHeader"
import ContactProvider from "../../context/ContactContext"
import Modal from "../../ui/Modal"
import ContactPagination from "./ContactPagination"
import DropdownMenuOpeningContextProvider from "../../context/DropdownMenuOpeningContext"
const StyledContactLayout = styled.div`
    // display: flex;
    // flex-direction: column;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 6% 75% 6%;
    grid-template-areas: 
    "contactHeader"
    "contactList"
    "contactPagination";
    gap: var(--spacing);
    height: 100%;
    
`

function ContactLayout() {
    return (
            <StyledContactLayout>
                <ContactHeader></ContactHeader>
                <ContactList></ContactList>
                <ContactPagination/>
            </StyledContactLayout>
    )
}

export default ContactLayout