import './menu.scss';

import React from 'react';

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">What I Do</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">Contact</a>
                </li>
            </ul>
            
        </div>
    );
}

export default Menu;
