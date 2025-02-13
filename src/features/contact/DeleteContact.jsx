import styled, {css} from "styled-components"
import StyledLabel from "../../ui/Label"
import { useModalContext } from "../../ui/Modal"
import Button from "./components/Button"

import { useDropdownMenuOpeningContext } from "../../context/DropdownMenuOpeningContext"

import { deleteContact } from "./ContactSlice"
import { useDispatch } from "react-redux"

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

function DeleteContact({contactInfo}) {
    const {id, name, email, phone, address} = contactInfo
    
    const {close} = useModalContext()
    
    const {closeDropdownList} = useDropdownMenuOpeningContext()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(deleteContact(id))
        closeDropdownList()
        close()
    }
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormRow>
                    <StyledLabel>Name: </StyledLabel>
                    <StyledFormInput defaultValue={name} disabled></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Email: </StyledLabel>
                    <StyledFormInput defaultValue={email} disabled></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Contact Number: </StyledLabel>
                    <StyledFormInput defaultValue={phone} disabled></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Address: </StyledLabel>
                    <StyledFormInput defaultValue={address} disabled></StyledFormInput>
                </StyledFormRow>
                <StyledButtonRow>
                    <Button onClick={close} theme="secondary">Cancel</Button>
                    <Button theme="warning">Delete Contact</Button>
                </StyledButtonRow>
            </StyledForm>
        </>
    )
}

export default DeleteContact