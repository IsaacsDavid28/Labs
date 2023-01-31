import '../css/Header.css'

import React from 'react';

interface IHeaderProps {
    user: string
}

function Header(props:IHeaderProps) {
    return (
        <div className="Header">
            <header>
                <h2>Ice Cream Wars</h2>
                <p className='user'>{props.user}</p>
            </header>
            
            
        </div>
    )
}

export default Header;

