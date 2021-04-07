import React, { Component } from 'react'
import '../styles/Navbar.css';
import {Link} from 'react-scroll';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand"><img src={'./images/food.png'} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={"./images/icon.png"}/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <Link
                                    className="link"
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <li className="nav-item">
                                        <a className="nav-link">Home</a>
                                    </li>
                                </Link>
                                <Link
                                    className="link"
                                    activeClass="active"
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <li className="nav-item">
                                        <a className="nav-link">Features</a>
                                    </li>
                                </Link>
                                <Link
                                    className="link"
                                    activeClass="active"
                                    to="category"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <li className="nav-item">
                                        <a className="nav-link">Category</a>
                                    </li>
                                </Link>
                                <Link
                                    className="link"
                                    activeClass="active"
                                    to="menu"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <li className="nav-item">
                                        <a className="nav-link">Menu</a>
                                    </li>
                                </Link>
                                <Link
                                    className="link"
                                    activeClass="active"
                                    to="mobapp"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <li className="nav-item">
                                        <a className="nav-link">Follow us</a>
                                    </li>
                                </Link>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
