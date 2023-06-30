import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../utils/api";

let sing_up_google = createAsyncThunk('sing_up_google', async ({ credential }, { rejectWithValue }) => {
    try {
        let res = await axios.post(apiUrl + 'auth/signup/google', { credential })
        localStorage.setItem('token', JSON.stringify(res.data.token))
        return {
            user: res.data.user,
            token: res.data.token,
            success: res.data.success,
        }
    } catch (error) {
        return rejectWithValue({
            success: false,
            loading: false,
            error: {
                userExist: 'the user already exist'
            },
            user: null
        })
    }
})

let sign_in_google = createAsyncThunk('sign_in_google', async ({ credential }, { rejectWithValue }) => {
    try {
        let res = await axios.post(apiUrl + 'auth/signin/google', { credential })
        localStorage.setItem('token', JSON.stringify(res.data.token))
        return {
            user: res.data.user,
            token: res.data.token,
            success: res.data.success,
        }
    } catch (error) {
        return rejectWithValue({
            success: false,
            loading: false,
            error: {
                credentials: 'wrong credentials'
            },
            user: null
        })
    }
})
const action = { sing_up_google, sign_in_google }
export default action