import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loginuser: null,
        whichRole: null

    },
    reducers: {
        setloginUser: (state, action) => {
            state.loginuser = action.payload
        },
        setWhichRole: (state, action) => {

            state.whichRole = action.payload
        },
    },
});

export const { setloginUser, setWhichRole } = userSlice.actions;
export default userSlice.reducer;