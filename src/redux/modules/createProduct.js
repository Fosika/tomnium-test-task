import api from "../../api/api";
import {CreateProduct} from './constants';

const URL_CREATE_PRODUCT = '/product/new';

const initialState = {
    err: false,
    data: {}
};

export const createProduct = (state = initialState, action) => {
    switch(action.type) {
        case CreateProduct.CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                err: false
            };
        case CreateProduct.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                payload: action.data || state.data,
            };
        case CreateProduct.CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state
    }
};

function createProductRequest() {
    return {
        type: CreateProduct.CREATE_PRODUCT_REQUEST
    }
}

function createProductSuccess(item) {
    return {
        type: CreateProduct.CREATE_PRODUCT_SUCCESS,
        ...item,
    }
}

function createProductFailure (err) {
    return {
        type: CreateProduct.CREATE_PRODUCT_FAILURE,
        err
    }
}

export const postCreateProduct = ({name, price, description, createdBy}) => (dispatch) => {
    dispatch(createProductRequest());
    api.instance.post(`${URL_CREATE_PRODUCT}`,{name, price, description, createdBy})

        .then((res) =>{
            dispatch(createProductSuccess(res));
        })
        .catch((error)=> {
            dispatch(createProductFailure(error))
        })

};