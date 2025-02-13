import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/contact/redux/ContactSlice"
import paginationReducer from "./features/contact/redux/paginationSlice"
import uiReducer from "./features/contact/redux/UiSlice"
const store = configureStore({
    reducer: {
        contact: contactReducer,
        pagination: paginationReducer,
        ui: uiReducer
    }
})

export default store