import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="navbar">
                <Link to="/">Shopping</Link>

                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/">Subscribe</Link> </li>
                    <li><Link to="/">Cart</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;