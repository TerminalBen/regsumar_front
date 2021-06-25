import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({title}) => {
    const location = useLocation()

    const onClick =()=>{
        console.log('click')
    }

    return (
        <header className='header'>
        <h2>{title}</h2>
        {location.pathname === '/' &&(
            <Button color='black' 
                text='Ver Todos' 
                onClick={onClick}/>
        )}
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