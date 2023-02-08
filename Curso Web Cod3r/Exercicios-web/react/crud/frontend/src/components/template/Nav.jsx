import './Nav.css'
import NavItem from './NavItem'
import React from 'react'
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem classes="fa fa-home" text="Início" href="/"/>
            <NavItem classes="fa fa-users" text="Usuários" href="/users"/>
        </nav>
    </aside>