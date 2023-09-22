import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../redux/user';
import contactReducer from '../redux/contact';
const store = configureStore({
    reducer: {
        users : userReducer,
        contact : contactReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store

