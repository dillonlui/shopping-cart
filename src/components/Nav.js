import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="navLinks">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav