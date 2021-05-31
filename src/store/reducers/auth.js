import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility"

// State
const initialState = {
    accessToken : null,
    refreshToken : null,
    error : null,
    loading : false
}

// Multiple Reducers
const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}
const authSuccess = (state, action) => {
    return updateObject(state, {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        error: null,
        loading: false
    })
}
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}
const authLogout = (state, action) => {
    return updateObject(state, {
        accessToken : null,
        refreshToken : null
    })
}

// Combined Reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;