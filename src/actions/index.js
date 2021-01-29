import * as types from '../constants/ActionTypes'

export const incrementCounter = iteration => ({type : types.INCREMENT_COUNTER, iteration})
export const gatherPhotoId = (photo) => ({type : types.GATHER_PHOTO_ID, photo: photo})
export const gatherPrivatePageId = (privatePage) => ({type : types.GATHER_PHOTO_ID, privatePage: privatePage})