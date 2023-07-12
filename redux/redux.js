const redux = require('redux');
const createStore = redux.createStore


// initial state

const initialState = {
    numberOfBooks: 200,
}

// action

const BUY_BOOK = "buy-book"

////////////////////////////////////////////////////////////////


//action creator

const buyBook = ()=>{
    return {
        type: BUY_BOOK,
    }
}
////////////////////////////////////////////////////////////////

//reducers

const reducers = (state = initialState,action)=>{

    switch (action.type) {
        case BUY_BOOK:
            return{
                ...state,
            numberOfBooks : state.numberOfBooks - 1
            }
    
        default:

            break;
    }

}