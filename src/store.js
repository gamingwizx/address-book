import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/contact/ContactSlice"
import paginationReducer from "./features/contact/paginationSlice"
const store = configureStore({
    reducer: {
        contact: contactReducer,
        pagination: paginationReducer,
    }
})

export default store