import { useSelector } from "react-redux";

function useFilteredItems() {
    const {contactList, searchKeyword, currentPage, itemsPerPage} = useSelector((store) => store.contact)
    let filteredList = contactList.filter(contact => {
        return (contact.email.toLowerCase().includes(searchKeyword) || contact.phone.toLowerCase().includes(searchKeyword) || contact.address.toLowerCase().includes(searchKeyword) || (contact.name.toLowerCase().includes(searchKeyword)))
    })
    const startingIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startingIndex + itemsPerPage
    filteredList = filteredList.slice(startingIndex, endIndex)
    return filteredList
}

export default useFilteredItems