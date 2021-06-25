import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p><Link to='/'>Inicio</Link></p>
            <p><a href='https://github.com/TerminalBen'>Developed by</a></p>
        </div>
    )
}

export default About
