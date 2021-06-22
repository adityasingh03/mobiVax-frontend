import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const verifyStart = () => {
    return{
        type: actionTypes.VERIFY_START
    }
}

export const auth = (mobileNo, staff) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            mobileNo: mobileNo,           
        };
        let url = 'http://localhost:9000/user/login';
        if (staff) {
            url = 'http://localhost:9000/user/login';
        }
        axios.post(url, authData)
        .then( response => {
           console.log(response)
           localStorage.setItem('phone', mobileNo)
           dispatch(verifyStart());
        }).catch(e => {
            console.log(e);
            dispatch(authFail());
        })
    };
};


export const verify = (mobileNo, otp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            mobileNo,
            otp          
        };
        let url = 'http://localhost:9000/user/verify';

        axios.post(url, authData)
        .then( response => {
           console.log(response)
           localStorage.setItem('phone', mobileNo)
           dispatch(authSuccess());
        }).catch(e => {
            console.log(e)
            dispatch(authFail());
        })
    };
};