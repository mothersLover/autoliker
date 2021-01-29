import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {incrementCounter} from '../actions'

let Button = ({template, iteration, currentState, increment}) => (

    <div>
        <button onClick={increment}>PRESS TO ITERATE THE COUNTER</button>
        <h2>{template + iteration}</h2>
        <button onClick={() => console.log('Redux State:', currentState)}>Press to inspect STATE in console panel
        </button>
    </div>

)

const mapStateToProps = (state) => ({
    template: state.buttonReducer.template,
    iteration: state.buttonReducer.iteration,
    currentState: state
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch(incrementCounter())
    }
})

Button.propTypes = {
    template: PropTypes.string.isRequired,
    iteration: PropTypes.number.isRequired,
    currentState: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired
}

export default Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
