import api from '../../api/api';
import {AllProduct} from './constants';

const URL_PRODUCTS = '/products';
const initialState = {

};

export function products(state = initialState, action = {}) {
    switch(action.type) {
        case AllProduct.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
            };
        case AllProduct.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.items,
            };
        case AllProduct.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state;
    }
}

const fetchProductsRequest = () => ({
    type: AllProduct.FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = ({ data }) => ({
    type: AllProduct.FETCH_PRODUCTS_SUCCESS,
    items: data
});

const fetchProductsFailure = (err) => ({
    type: AllProduct.FETCH_PRODUCTS_FAILURE,
    err
});



export const fetchAllProducts = () => dispatch => {
    dispatch(fetchProductsRequest());

    return api.instance.get(URL_PRODUCTS)
        .then(res => {
            if(res.status === 200){
                dispatch(fetchProductsSuccess(res))
            }else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchProductsFailure(err)))

};
