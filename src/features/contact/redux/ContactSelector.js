import { createSelector } from "@reduxjs/toolkit"
import { filteredContactList } from "./ContactSlice"

const selectItemsPerPage = (state) => state.pagination.itemsPerPage
const selectCurrentPage = (state) => state.pagination.currentPage

export const filteredContactListForDisplay = createSelector([filteredContactList, selectItemsPerPage, selectCurrentPage],
(filteredContactList, itemsPerPage, currentPage) => {
    
    const startingIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startingIndex + itemsPerPage
    return filteredContactList.slice(startingIndex, endIndex) 

})