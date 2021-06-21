import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: null,
    userId: null,
    loading: false,
    auth: false
};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.AUTH_START:
            return{
                ...state,
                loading: true
            }

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                auth: true,
                loading: false

            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                auth: false,
                loading: false
            }

        default:
            return state;
    }
}

export default reducer;