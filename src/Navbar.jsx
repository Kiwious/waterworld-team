import React from "react"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="siteTitle">Waterworld</Link>
            <ul>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/events'>Events</CustomLink>
                <CustomLink to="/team">Team</CustomLink>
                <CustomLink to='/partner'>Partner</CustomLink>
                <a className="inviteButton" href="https://2no.co/wwinvite">Invite</a>
            </ul>
        </nav>
    );
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>   
    );
};

export default Navbar;