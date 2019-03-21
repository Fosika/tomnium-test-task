import api from '../../api/api';
import {userRegistr} from './constants';
const REGISTERED = 'REGISTERED';
const URL_REGISTRATION = '/user';


const initialState = {
    err: '',
    isAuth: false,
    data: {},
};

export const registration = (state = initialState, action) => {
    switch (action.type) {
        case userRegistr.REGISTER_REQUEST:
            return {
                ...state,
                err: false
            };
        case userRegistr.REGISTER_SUCCESS:
            return {
                ...state,
                data: action.data || state.data,
            };
        case  userRegistr.REGISTER_FAILURE:
            console.log('err')
            return {
                ...state,
                err: action.payload.response.data.data.message,
            };
        case REGISTERED:
            return {
                ...state,
                isAuth: true
            };

        default:
            return state
    }
};

function register_request() {
    return {
        type: userRegistr.REGISTER_REQUEST
    }
}

export function register_Success({data}) {
    return {
        type: userRegistr.REGISTER_SUCCESS,
        data: data,
    }
}

export function register_failure(error) {
    return {
        type: userRegistr.REGISTER_FAILURE,
        payload: error
    }
}
export const registered = () => ({
    type: REGISTERED
});


export function postRegistration({username, password}) {
    return dispatch => {
        dispatch(register_request());
        api.instance.post(`${URL_REGISTRATION}`, {username, password})
            .then((res) => {
                if (res.status === 201) {
                    dispatch(register_Success(res));
                    dispatch(registered());

                } else {
                    dispatch(register_failure(res.data))
                }
            })
            .catch((error) => {
                dispatch(register_failure(error))
            })
    }
};
