import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHotjar, FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import { Button } from './Button'
import '../styles/Navbar.scss'

function Navbar() {
    const [states] = useState({
        open: <FaBars />,
        close: <FaTimes />,
    })

    const closeMobileMenu = () => setClick(false)

    const [click, setClick] = useState(false)
    const [menu, setMenu] = useState(states.open)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        if (menu === states.open) {
            setMenu(states.close)
        } else {
            setMenu(states.open)
        }
        setClick(!click)
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        LNRD <FaHotjar />
                    </Link>
                    <div className="menu-icon" onClick={() => handleClick()}>
                        {menu}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className="form-search form-mobile">
                            <form id="search" method="POST">
                                <input
                                    type="hidden"
                                    id="busca"
                                    value="4028808B76AEADE80176AEBE3D501506"
                                />
                                <input
                                    type="text"
                                    id="query"
                                    autoComplete="off"
                                    className="input-search"
                                    name="query"
                                />
                                <button type="submit" className="btn-search">
                                    <FaSearch />
                                </button>
                            </form>
                        </div>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        {/* <li className="nav-item search">
                            <FaSearch />
                        </li> */}
                        <button
                            className="search-desktop"
                            id="open_search"
                        >
                            <FaSearch />
                        </button>
                    </ul>

                    {button && (
                        <Button buttonStyle="btn--outline">Login</Button>
                    )}
                </div>
                <div className="buttons-mobile">
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className="nav-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            Login
                        </Link>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
