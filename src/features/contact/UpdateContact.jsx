import styled from "styled-components"
import { useState } from "react"
import StyledLabel from "../../components/Label"
import { updateContact } from "./redux/ContactSlice"
import { useDispatch } from "react-redux"
import Button from "../../components/Button"
import { closeAll } from "./redux/UiSlice"
import { useDropdownMobileContext } from "./context/DropdownMobileContext"

const StyledAddNewContact = styled.div`

`
const StyledForm = styled.form`
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 2);
`

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "label input";
    gap: var(--spacing);

    & label {
        grid-area: label;
    }

    & input {
        grid-area: input;
    }
`
const StyledFormInput = styled.input`
    width: 100%;
    padding: var(--spacing);
    font-size: 1em;
    border: 1px solid #e0e0e0;
`
const StyledButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing);
`

function UpdateContact({contactInfo}) {
    const {id, name, email, phone, address} = contactInfo
    const [updatedName, setUpdatedName] = useState(() => name)
    const [updatedEmail, setUpdatedEmail] = useState(() => email)
    const [updatedPhone, setUpdatedPhone] = useState(() => phone)
    const [updatedAddress, setUpdatedAddress] = useState(() => address)
    
    const {closeDropdownList} = useDropdownMobileContext()

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newContactNumber = {
            id: id,
            name: updatedName,
            email: updatedEmail,
            phone: updatedPhone,
            address: updatedAddress
        }
        dispatch(updateContact(newContactNumber))
        dispatch(closeAll())
        closeDropdownList()
    }
    return (
        <StyledAddNewContact>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormRow>
                    <StyledLabel>Name: </StyledLabel>
                    <StyledFormInput defaultValue={name} onChange={(e) => setUpdatedName(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Email: </StyledLabel>
                    <StyledFormInput defaultValue={email} onChange={(e) => setUpdatedEmail(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Contact Number: </StyledLabel>
                    <StyledFormInput defaultValue={phone} onChange={(e) => setUpdatedPhone(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Address: </StyledLabel>
                    <StyledFormInput defaultValue={address} onChange={(e) => setUpdatedAddress(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledButtonRow>
                    <Button onClick={() => dispatch(closeAll())} theme="secondary">Cancel</Button>
                    <Button>Update Contact</Button>
                </StyledButtonRow>
            </StyledForm>
        </StyledAddNewContact>
    )
}

export default UpdateContact