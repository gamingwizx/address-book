import { createSelector } from "@reduxjs/toolkit"

const selectItemsPerPage = (state) => state.pagination.itemsPerPage
const selectCurrentPage = (state) => state.pagination.currentPage

export const filteredContactList = createSelector([(state) => state.contact.contactList, (state) => state.contact.searchKeyword, selectItemsPerPage, selectCurrentPage],
(contactList, searchKeyword, itemsPerPage, currentPage) => {

    let filteredList = contactList.filter(contact => {
        return (contact.email.toLowerCase().includes(searchKeyword) || contact.phone.toLowerCase().includes(searchKeyword) || contact.address.toLowerCase().includes(searchKeyword) || (contact.name.toLowerCase().includes(searchKeyword)))})
    
    const startingIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startingIndex + itemsPerPage

    filteredList = filteredList.slice(startingIndex, endIndex) 
    return filteredList

})