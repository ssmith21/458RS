import React from 'react'
import propTypes from 'prop-types'

const Header = ({title,notice}) => {
    return (
        <div>
            <h1>Reservation System</h1>
            <h3>{title}</h3>
            <p>{notice}</p>
        </div>
    )
}

Header.defaultProps = {
    title: '',
    notice: ''
}

Header.propTypes = {
    title: propTypes.string,
    notice: propTypes.string
}

export default Header
