import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as constants from "../constants/AutoLiker";
import {save} from '../actions/saveToFile';

const request = require('request');

export default class GatherPhotoButton extends Component {
    static propTypes = {
        gatherPhotoId: PropTypes.func.isRequired,
        gatherPrivatePageId: PropTypes.func.isRequired,
    }

    state = {
        editing: true
    }

    gatherPhotosFromIds = () => {
        let id = '385764608';
        // constants.LEFT_IDS.forEach((id, i) => {
        //     setTimeout(() => {
                request({
                    url: 'https://api.vk.com/method/photos.get',
                    method: 'POST',
                    form: {
                        owner_id: id,
                        rev: 1,
                        album_id: constants.ALBUM,
                        count: constants.NUMBER_PHOTOS_TO_LIKE,
                        access_token: constants.TOKEN,
                        v: constants.API_VERSION
                    },
                    json: true
                }, (err, res, body) => {
                    if (!err && res.statusCode === 200) {
                        if (body.error) {
                            console.log(body.error.error_msg + ' id= ' + id + ', error code= ' + body.error.error_code);
                            if (body.error.error_code === 30) {
                                this.props.gatherPrivatePageId(id)
                            }
                            if (body.error.error_code !== 30 && body.error.error_code !== 15) {
                                throw new Error(body.error.error_msg + ' id= ' + id + ', error code= ' + body.error.error_code);
                            }
                        } else if (body.response.items) {
                            console.log(body.response)
                            const items = body.response.items;
                            items.map(photo => {
                                let newPhoto = {
                                    id: photo.id,
                                    owner_id: id
                                }
                                this.props.gatherPhotoId(newPhoto);
                                let string = photo.id + '-' + id + '\n';
                                save('photos.txt', string);
                                console.log(string)
                            });
                        }
                    }
                });
            // }, i * 3000);
        // });
    }

    render() {
        return (

            <div className="buttonDiv">
                <button className="gatherPhotoButton"
                        onClick={this.gatherPhotosFromIds}>FIND PHOTOS</button>
            </div>
        )
    }
}
