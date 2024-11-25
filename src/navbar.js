import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './navbar.css';
import PVCCupboards from './products/PVCCupboards';

function Navbar() {
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);

    return (
        <div className="outer">
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/About">About us</Link>

                <div
                    className="dropdown"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                >
                    <Link to="#">Products</Link>
                    {showProductsDropdown && (
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <Link to="#">uPVC</Link>
                                <div className="sub-dropdown">
                                    <Link to="/products/upvcwindows">Windows</Link>
                                    <Link to="/products/upvcdoors">Doors</Link>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <Link to="#">PVC</Link>
                                <div className="sub-dropdown">
                                    <Link to="/products/pvcdoors">Doors</Link>
                                    <Link to="/products/PVCCupboards">Cupboards</Link>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <Link to="#">WPC</Link>
                                <div className="sub-dropdown">
                                    <Link to="/products/wpcdoors">Doors</Link>
                                    <Link to="/products/frames">Frames</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;
