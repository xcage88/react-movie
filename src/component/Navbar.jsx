import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
    return (
        <div>
            <nav className="navbar navbar-menu navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='home' className='item-list navbar-brand'><span className='fw-bold text-white fs-3'>GoWatch</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex align-items-center">
                                <Link to='home' className='item-list fw-bold'><span>Home</span></Link>
                            </li>
                            <li className="nav-item d-flex ms-2 align-items-center">
                                {/* <Link to='link' className='item-list'><span>Link</span></Link> */}
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genre
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Comedy</a></li>
                                    <li><a className="dropdown-item" href="#">Horror</a></li>
                                    <li><a className="dropdown-item" href="#">Fantasy</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Hi, User</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-dangers text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar