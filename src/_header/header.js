import React from 'react';
import {Link} from "react-router-dom";
import "./../_custom_hooks/enums";
import "./header.scss";

function Header({result}) {

    return (
        <div className={'header'}>
            <Link to='/'>
                <img src={result.logoImage}/>
            </Link>
            <h1>{result.title}</h1>
            <Link to='/profile'>Welcome Sally</Link>
        </div>
    );
}

export default Header;