import { ActionTypes } from "../contents/actionTypes";

const initialState = {
    products:[]
}


export const productReducer =(state,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}