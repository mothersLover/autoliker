import {GATHER_PHOTO_ID, GATHER_PRIVATE_PAGE_ID} from "../constants/ActionTypes";

const initialState = {
    photos: [],
    privatePages: []
}

const gatherPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GATHER_PHOTO_ID:
            return {...state, photos: state.photos.concat(action.photo)}
        case GATHER_PRIVATE_PAGE_ID:
            return {...state, photos: state.privatePages.concat(action.privatePage)}
        default:
            return state;
    }
};

export default gatherPhotosReducer;
