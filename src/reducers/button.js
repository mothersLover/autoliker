import {INCREMENT_COUNTER} from "../constants/ActionTypes";

const initialState = {
    template: 'Kitty',
    iteration: 0
}

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, iteration: ++state.iteration};
        default:
            return state;
    }
};

export default buttonReducer;
