import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Link to={`${process.env.PUBLIC_URL}/`}>
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo"/>
            </Link>
        </header>
    )
}

export default Header