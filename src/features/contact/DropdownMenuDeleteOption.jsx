import Modal from "../../components/Modal"
import StyledDropdownOption from "../../components/DropdownOption"
import StyledOptionLabel from "../../components/DropdownOptionLabel"
import Img from "../../components/Img"

import DeleteContact from "./DeleteContact"

export default function DropdownMenuDeleteOption({contactInfo}) {
    return (
        <Modal>
            <Modal.Open name="delete-contact">
                <StyledDropdownOption name="delete">
                    <Img size="small" src="/delete-icon.svg"/>
                    <StyledOptionLabel color="red">Delete</StyledOptionLabel>
                </StyledDropdownOption>
            </Modal.Open>
            <Modal.Window title="Delete Contact" name="delete-contact">
                <DeleteContact contactInfo={contactInfo}/>
            </Modal.Window>
        </Modal>
    )
}