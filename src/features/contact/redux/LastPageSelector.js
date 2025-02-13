import { createSelector } from "@reduxjs/toolkit"
import { contactListLength } from "./ContactSlice"

const LastPageSelector = createSelector([contactListLength, (state) => state.pagination.itemsPerPage], (contactsLength, itemsPerPage) => {
    return Math.ceil(contactsLength / itemsPerPage)
})

export default LastPageSelector