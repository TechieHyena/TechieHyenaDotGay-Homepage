import styled from "styled-components"
import { Link, Router, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const links = [
    {
        path: '/',
        name: 'About'
    },
    {
        path: '/projects',
        name: "Projects"
    },
    {
        path: '/sitemap',
        name: 'Sitemap'
    }
]

const NavBar = () => {
    const [selected, setSelected] = useState('/')
    const location = useLocation();
    useEffect(() => {
        setSelected(location.pathname)
    }, [location]);
    return (
        <NavBarLinks>
            {links.map(({path, name}, idx) => {
                return <NavLink key={idx} className={path === selected ? 'selected' : ''}><Link to={path}>{name}</Link></NavLink>
            })}
        </NavBarLinks>
    )
}

const NavLink = styled.li`
    padding: 1rem;

    &.selected {
        background: white;
    }


    & > * {
        color: white;
        text-decoration: none;
    }

    &.selected > * {
        color: black;
    }
`

const NavBarLinks = styled.ul`
    color: white;
    list-style: none;
    display: flex;
    font-size: 24px;
`

export default NavBar
