import Modal from "../../ui/Modal"
import Button from "./components/Button"
import AddNewContact from "./AddNewContact"
function AddNewContactButton() {
    return (
        <Modal>
            <Modal.Open label="Add New Contact" name="open-new-contact">
                <Button>Add New Contact</Button>
            </Modal.Open>
            <Modal.Window title="Add New Contact" name="open-new-contact">
                <AddNewContact></AddNewContact>
            </Modal.Window>
        </Modal>
    )
}

export default AddNewContactButton