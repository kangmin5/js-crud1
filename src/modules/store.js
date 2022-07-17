import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
import user from "./slices/userSlice";
import users from "./slices/usersSlice";
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user,
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)


export default store