import { createSlice } from "@reduxjs/toolkit";

 const user = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        email: '',
        password: '',
        mobile:''
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload
            return state
        },
        logoutSlice: (state) => {
            state = null;
            return state; 
        }
    }
})
export const { setUserSlice, logoutSlice } = user.actions

export default user.reducer