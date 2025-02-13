import { createSelector, createSlice, current } from "@reduxjs/toolkit"
const initialState = {
    currentPage: 1,
    itemsPerPage: 3,
    maxPageShown: 5
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState: initialState,
    reducers: {
        nextPage: (state) => {
            state.currentPage += 1
        },
        previousPage: (state) => {
            state.currentPage -= 1
        },
        jumpToPage: (state, action) => {
            state.currentPage = action.payload
        },
    }
})

export const selectItemsPerPage = createSelector((state) => state.pagination.itemsPerPage, (itemsPerPage) => itemsPerPage)
export const selectCurrentPage = createSelector((state) => state.pagination.currentPage, (currentPage) => currentPage)
export const selectMaxPageShown = createSelector((state) => state.pagination.maxPageShown, (maxPageShown) => maxPageShown)

export const {nextPage, previousPage, jumpToPage} = paginationSlice.actions
export default paginationSlice.reducer