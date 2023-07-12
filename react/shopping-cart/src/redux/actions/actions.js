import { ActionTypes } from "../contents/actionTypes"

export const setProducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selecttProducts = (product)=>{
    return{
        type: ActionTypes.SELET_PRODUCTS,
        payload: product,
    }
}
