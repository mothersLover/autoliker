import React from 'react'
import {connect} from 'react-redux'
import * as GatherButtonActions from '../actions'
import { bindActionCreators } from 'redux'
import GatherPhotoButton from "../components/GatherPhotoButton";

let GatherPhotoContainer = ({ privatePages, photos, actions }) => (
    <div>
        <GatherPhotoButton key={"adsasd"} {...actions} />
        <p>Private Pages : {privatePages.length}</p>
        <p>Photos : {photos.length}</p>
    </div>
)

const mapStateToProps = (state) => ({
    privatePages: state.gatherPhotosReducer.privatePages,
    photos: state.gatherPhotosReducer.photos,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GatherButtonActions, dispatch)
})

export default GatherPhotoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GatherPhotoContainer);

