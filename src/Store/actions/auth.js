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

export const auth = (mobileNo, staff) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            mobileNo: mobileNo,           
        };
        let url = 'localhost:9000/user/login';
        if (staff) {
            url = 'localhost:9000/user/login';
        }
        axios.post(url, authData)
            .then(response => {
                // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                // localStorage.setItem('token', response.data.idToken);
                // localStorage.setItem('expirationDate', expirationDate);
                // localStorage.setItem('userId', response.data.localId);
                // dispatch(authSuccess(response.data.idToken, response.data.localId));
                // dispatch(checkAuthTimeout(response.data.expiresIn));

                console.log(response.data)
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};