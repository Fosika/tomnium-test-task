import api from '../../api/api';

import {userLogin} from './constants';
const URL_TOKEN = '/login';

const initialState = {
    err: false,
    isAuth: false,
    data: {}
};

export const login = (state = initialState, action) => {
    switch(action.type) {
        case  userLogin.LOGIN_REQUEST:
            return {
                ...state,
                err: false
            };
        case  userLogin.LOGIN_SUCCESS:
            api.setToken(action.token);
            return {
                token: action.token,
                isAuth: true
            };
        case  userLogin.LOGIN_FAILURE:
            console.log('err'.action)
            return {
                ...state,

                err: action.payload.response.data.data.message,
            };
        default:
            return state
    }
};

function login_request() {
    return {
        type: userLogin.LOGIN_REQUEST
    }
}

export function login_Success({data}) {
    return {
        type:  userLogin.LOGIN_SUCCESS,token: data,
    }
}

function login_failure(error) {
    return {
        type: userLogin.LOGIN_FAILURE,
        payload: error
    }

}

export function UsersLogin ({ username, password }) {return dispatch => {
    dispatch(login_request());
    api.instance.post(`${URL_TOKEN}`,{username: username, password: password})

    .then((res) =>{
            dispatch(login_Success(res));
        })
        .catch( (error)=> {
            dispatch(login_failure(error))
        })

}};