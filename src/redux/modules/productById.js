import api from "../../api/api";
import {ProductById} from './constants';
const URL_PRODUCT_ID = '/product';

const initialState = {
};


export function productById(state = initialState, action = {}) {
    switch(action.type) {
        case ProductById.PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                err: false
            };
        case ProductById.PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                data: action.items,
            };
        case ProductById.PRODUCT_BY_ID_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state;
    }
}

const fetchProductIdRequest = () => ({
    type: ProductById.PRODUCT_BY_ID_REQUEST
});

const fetchProductIdSuccess = ({ data }) => ({
    type: ProductById.PRODUCT_BY_ID_SUCCESS,
    items: data
});

const fetchProductIdFailure = (err) => ({
    type: ProductById.PRODUCT_BY_ID_FAILURE,
    err
});

export const GetProduct = (id) => (dispatch) => {
    dispatch(fetchProductIdRequest());

    return api.instance.get(`${URL_PRODUCT_ID}/${id}`)
        .then(res => {
            if(res.status === 200){
                dispatch(fetchProductIdSuccess(res));
            }
            else{
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchProductIdFailure(err)))

};