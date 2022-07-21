import { WindowSharp } from "@mui/icons-material"
import { createUserAPI, deleteUserByIdAPI, getUsersAPI, getUserByIdAPI, updateUserAPI } from "modules/apis"
import { addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice, setUserSlice } from "modules/slices"
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from "modules/types"
import { put,takeEvery } from "redux-saga/effects"

export function* getUsersSaga() {
    const users = yield getUsersAPI()
    yield put(getUsersSlice(users.data))
}

export function* getUserByIdSaga(action) {
    yield getUserByIdAPI(action.id)
    yield put(setUserSlice(action.id))
}
export function* createUserSaga(action) {
    yield createUserAPI(action.user)
    yield put(addUserSlice(action.user))
}

export function* updateUserSaga(action) {
    yield updateUserAPI(action.user)
    yield put(editUserSlice(action.user))
}

export function* deleteUserByIdSaga(action) {
    yield deleteUserByIdAPI(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUsersAsync() {
    yield takeEvery(GET_USERS, getUsersSaga)
    yield takeEvery(GET_USER_BY_ID, getUserByIdSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga)
}