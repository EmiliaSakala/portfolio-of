import './menu.scss';

import React from 'react';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
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
