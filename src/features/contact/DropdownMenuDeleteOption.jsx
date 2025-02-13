import Modal from "../../ui/Modal"
import StyledDropdownOption from "./components/DropdownOption"
import StyledOptionLabel from "./components/DropdownOptionLabel"
import Img from "../../ui/Img"

import DeleteContact from "./DeleteContact"

export default function DropdownMenuDeleteOption({contactInfo}) {
    return (
        <Modal>
            <Modal.Open>
                <StyledDropdownOption name="delete">
                    <Img size="small" src="/delete-icon.svg"/>
                    <StyledOptionLabel color="red">Delete</StyledOptionLabel>
                </StyledDropdownOption>
            </Modal.Open>
            <Modal.Window title="Delete Contact">
                <DeleteContact contactInfo={contactInfo}/>
            </Modal.Window>
        </Modal>
    )
}