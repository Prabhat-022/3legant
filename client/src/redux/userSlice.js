import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loginuser: null,
        admin: null,
        whichRole: null

    },
    reducers: {
        setloginUser: (state, action) => {
            state.loginuser = action.payload
        },
        setadmin: (state, action) => {
            state.admin = action.payload
        },
        setWhichRole: (state, action) => {

            state.whichRole = action.payload
        },
    },
});

export const { setloginUser, setWhichRole, setadmin } = userSlice.actions;
export default userSlice.reducer;