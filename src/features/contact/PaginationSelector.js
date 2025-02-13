import { createSelector } from "@reduxjs/toolkit"
import { filteredContactList } from "./ContactSlice"

export const getPages = createSelector([(state) => state.pagination.currentPage, (state) => state.pagination.itemsPerPage, (state) => state.pagination.maxPageShown, filteredContactList],
(currentPage, itemsPerPage, maxPageShown, filteredContacts) => {
    
    const maxPage = Math.ceil(filteredContacts.length / itemsPerPage)
    
    if (maxPage <= maxPageShown) return Array.from({ length: maxPage}, (_,i) => i + 1)

    let startIndex = Math.max(1, currentPage - Math.floor(maxPageShown / 2))
    const isClosingLastPage = (maxPage - maxPageShown + 1) <= startIndex

    const lastPageArray = Array.from({ length: maxPageShown}, (_,i) => (maxPage - maxPageShown + 1) + i)
    const pages = Array.from({ length: maxPageShown}, (_,i) => startIndex + i)
    return isClosingLastPage ? lastPageArray : pages
})