import { createReducer } from "@reduxjs/toolkit";

import authActions from "./userAction"

/* const { sing_up_google, sign_in_google } = googleActions */
const { sign_in, sign_in_token, sign_out, sign_up, clean_up, verify_code } = authActions

let initial_state = {
    success: null,
    error: null,
    loading: null,
    user: null,
    token: null,
    cart: null,
    google: false
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(
            sign_in.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    user: action.payload.user,
                    loading: false,
                    error: null,
                    success: true,
                    token: action.payload.token,
                    cart: action.payload.cart
                }
                return new_state
            }
        )
        .addCase(
            sign_in.pending,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    error: null,
                    loading: true
                }
                return new_state;
            }
        )
        .addCase(
            sign_in.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    error: action.payload.error,
                    success: action.payload.success,
                    loading: action.payload.loading,
                    user: null
                }
                return new_state
            }
        )
        .addCase(
            sign_in_token.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    user: action.payload.user,
                    loading: false,
                    error: null,
                    success: true,
                    token: action.payload.token
                }
                return new_state
            }
        )
        .addCase(
            sign_in_token.pending,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    error: null,
                    loading: true
                }
                return new_state;
            }
        )
        .addCase(
            sign_in_token.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    error: action.payload.error,
                    success: false,
                    loading: false,
                    user: null
                }
                return new_state
            }
        )
        .addCase(
            sign_up.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false,
                    error: null,
                    success: action.payload.success,
                }
                return new_state
            }
        )
        .addCase(
            sign_up.pending,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    error: null,
                    loading: true
                }
                return new_state;
            }
        )
        .addCase(
            sign_up.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    error: action.payload.error,
                    success: false,
                    loading: false,
                }
                return new_state
            }
        )
        .addCase(
            sign_out.fulfilled,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    user: null,
                    token: null,
                    loading: false,
                    error: null,
                }
                return new_state
            }
        )
        .addCase(
            sign_out.pending,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    error: null,
                    loading: true
                }
                return new_state;
            }
        )
        .addCase(
            sign_out.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    error: action.payload.error,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            verify_code.fulfilled,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false,
                    error: null,
                    verify: true
                }
                return new_state
            }
        )
        .addCase(
            verify_code.pending,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    error: null,
                    loading: true
                }
                return new_state;
            }
        )
        .addCase(
            verify_code.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    error: action.payload.error,
                    verify: false,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            clean_up,
            (state, action) => {
                const new_state = {
                    ...state,
                    error: action.payload.error,
                    success: action.payload.success,
                    loading: action.payload.loading
                }
                return new_state
            }
        )
    /* .addCase(
        sing_up_google.fulfilled,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                error: null,
                success: true,
                google: true
            }
            return new_state
        }
    )
    .addCase(
        sing_up_google.pending,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                error: null,
                loading: true,
                google: true
            }
            return new_state;
        }
    )
    .addCase(
        sing_up_google.rejected,
        (state, action) => {
            const new_state = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: false,
                user: null,
                token: null,
                google: true
            }
            return new_state
        }
    )
    .addCase(
        sign_in_google.fulfilled,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                error: null,
                success: true,
                google: true
            }
            return new_state
        }
    )
    .addCase(
        sign_in_google.pending,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                error: null,
                loading: true,
                google: true
            }
            return new_state;
        }
    )
    .addCase(
        sign_in_google.rejected,
        (state, action) => {
            const new_state = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: false,
                user: null,
                token: null,
                google: true
            }
            return new_state
        }
    ) */

)

export default reducer;