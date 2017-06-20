import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//component styles
import s from './Button.styl'


export default class Button extends React.Component {
    render() {
        return (
            <button className={"btn-floating btn-large waves-effect waves-light light-blue accent-3 " + s.btn} onClick={this.props.onClick}>
                <i className="material-icons">{this.props.icon}</i>
            </button>
        )
    }
}

Button.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func
}