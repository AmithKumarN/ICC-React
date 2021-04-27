import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/"><img src={logo} alt="logo" height="75px" width="75px" align="left"/></Link>
            <br/>
            <nav align="right">
                <Link to="/Committee">Committee</Link> |&nbsp;
                <Link to="/Papers">Call for Papers</Link> |&nbsp;
                <Link to="/Registration">Registration</Link> |&nbsp;
                <Link to="/Contact">Contact</Link>&nbsp;
            </nav>
        </div>
    );
}

export default Header;