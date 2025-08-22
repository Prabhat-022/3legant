import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../lib/axios'
import toast from 'react-hot-toast'

// Retrieve user info and token from localStorage if available
const userFromStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;


const initialState = {
  user: userFromStorage,
  allUsers: [],
  input: "",
  loading: false,
  error: null,
}

// Async thunk for user Login

export const loginUser = createAsyncThunk(`/user/loginUser`, async (userData, { rejectWithValue }) => {
  console.log('userData', userData);
  try {
    const response = await axiosInstance.post(`/api/login`, userData);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("Token", response.data.token);
    toast.success(response.data.message)
    return response.data.user;

  } catch (error) {
    toast.error(error.response.data.message)
    return rejectWithValue(error.response.data);
  }
})

// Async thunk for user Register

export const registerUser = createAsyncThunk(`/user/registerUser`, async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`/api/register`, userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("Token", response.data.token);
    toast.success(response.data.message)
    return response.data.user;
  } catch (error) {
    toast.error(error.response.data.message)
    return rejectWithValue(error.response.data);
  }
})

// Async thunk for user Update

export const updateUserProfile = createAsyncThunk("api/updateUserProfile", async (img, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put('/api/upload-profile-img',
      {
        image: img
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    );

    localStorage.setItem("user", JSON.stringify(response.data.user));
    toast.success(response.data.message)
    return response.data.user;
  } catch (error) {
    toast.error(error.response.data.message)
    return rejectWithValue(error.response.data);
  }
})

// Async thunk for update user

export const updateUserProfileInfo = createAsyncThunk("user/updateUserProfileInfo", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put('/api/update-user-info', data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    );

    localStorage.setItem("user", JSON.stringify(response.data.user));
    toast.success(response.data.message)
    return response.data.user;
  } catch (error) {
    toast.error(error.response.data.message)
    return rejectWithValue(error.response.data);
  }
})

//get all the users 
export const getAllUsers = createAsyncThunk("user/getAllUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/api/get-all-users',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    );
    return response.data.users;
  } catch (error) {
    toast.error(error.response.data.message)
    return rejectWithValue(error.response.data);
  }
})


export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
 
    setInput: (state, action) => {
      state.input = action.payload
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user');
      localStorage.removeItem('Token');
    },
  },

  extraReducers: (builder) => {
    //login builder 
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })

    //Register builder 
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = false;
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Update user profile
    builder.addCase(updateUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = false;
    })
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Update user info
    builder.addCase(updateUserProfileInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(updateUserProfileInfo.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = false;
    })
    builder.addCase(updateUserProfileInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    //get all the users 
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
      state.error = false;
    })
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }

})

export const { logout, setInput } = UserSlice.actions

export default UserSlice.reducer