import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick =()=>{
        console.log('click')
    }

    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color='black' text='Ver Sumarios' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title : 'Registo de Sumarios',
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}

export default Header