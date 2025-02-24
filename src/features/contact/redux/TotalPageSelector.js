import { createSelector } from "@reduxjs/toolkit";
import { filteredContactList } from "../redux/ContactSlice";

const totalPage = createSelector([filteredContactList, (state) => state.pagination.itemsPerPage], 
    (filteredContacts, itemsPerPage) => {
        return Math.ceil(filteredContacts.length / itemsPerPage)
    }
)
export default totalPage
