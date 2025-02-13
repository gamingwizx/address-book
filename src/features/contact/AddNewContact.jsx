import styled from "styled-components"
import { useState } from "react"
import StyledLabel from "../../components/Label"
import { addNewContact, contactListLength } from "./redux/ContactSlice"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import { closeAll } from "./redux/UiSlice"

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

function AddNewContact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const totalContacts = useSelector(contactListLength)

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newContactNumber = {
            id: totalContacts + 1,
            name,
            email,
            phone,
            address
        }
        dispatch(addNewContact(newContactNumber))
        dispatch(closeAll())
    }
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormRow>
                    <StyledLabel>Name: </StyledLabel>
                    <StyledFormInput onChange={(e) => setName(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Email: </StyledLabel>
                    <StyledFormInput onChange={(e) => setEmail(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Contact Number: </StyledLabel>
                    <StyledFormInput onChange={(e) => setPhone(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel>Address: </StyledLabel>
                    <StyledFormInput onChange={(e) => setAddress(e.target.value)}></StyledFormInput>
                </StyledFormRow>
                <StyledButtonRow>
                    <Button onClick={closeAll} theme="secondary">Cancel</Button>
                    <Button>Create New Contact</Button>
                </StyledButtonRow>
            </StyledForm>
        </>
    )
}

export default AddNewContact